/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import * as overLayNames from '../../constants/OverLayNames'
import ToolBar from './components/toolbar'
import tableMaker from './utils/tableMaker'
import {getTableHtml} from './utils/htmlLint'
import {tableModuleArray} from './utils/tableModules'
import {showOverLayByName,removeOverLayByName} from '../../actions/view'
import {updateCurrentStyleId,resetStyleList,saveTempModule,deleteTempModule,getTempModule} from '../../actions/form'
import HistoryItem from './utils/history/historyItem'
import ModuleContainer from './components/module/moduleContainer'
import saveAs from 'save-as'
import * as operationType from './utils/history/operationType'
import {cloneDataArray} from './utils/data-helper'

class FormPage extends Component{
    constructor(){
        super();
        this.state = {tableObj:null,height:window.innerHeight - 60,showModuleView:false};
        this.tdIds = [];
        this.historyList = [];
        this.backHistoryList = [];
        this.tableDataTosave = null;
    }

    onTdClick(id,isEdit=false){
        if(!isEdit) {
            if (this.tdIds.indexOf(id) >= 0) {
                this.tdIds.splice(this.tdIds.indexOf(id), 1);
            } else if (this.tdIds.indexOf(id) < 0) {
                this.tdIds.push(id);
            }
        } else {
            this.tdIds = [];
        }
        const {tableObj} = this.state;
        // this.setState({tableObj: tableObj});
        this.updateTable(tableObj);
    }

    handleResize(){
        const {innerHeight} = window;
        this.setState({height:innerHeight-60});
    }

    componentDidMount(){
        let importDataFunc = this.importData.bind(this);
        window['import_data_outer'] = function(str){
            let text = str;
            let index = text.search(/<div class='recoverData' style='display: none'>/);
            let lastWords = text.match(/<\/div>\s+<\/html>/);
            let index2 = text.search(lastWords);
            let recoverData = text.slice(index+"<div class='recoverData' style='display: none'>".length,index2-1);
            importDataFunc(recoverData);
        }.bind(this);
        this.props.dispatch(getTempModule(1,function(data){
            const {currentStyleId, formStyleList} = data.data;
            this.props.dispatch(resetStyleList(formStyleList));
            this.props.dispatch(updateCurrentStyleId(currentStyleId));
            setTimeout(function(){
                let tableObjData = data.data;
                let functionArray = {
                    onTdClick: this.onTdClick.bind(this),
                    onTdContext: this.onTdContext.bind(this),
                    onComponentDrop: this.onComponentDrop.bind(this),
                    onComponentContext: this.onComponentContext.bind(this),
                    afterUpdateStyle: this.afterUpdateStyle.bind(this),
                    onDeleteComponent: this.deleteComponent.bind(this),
                    addNewHistory: this.addNewHistory.bind(this),
                    addNewCancelHistory: this.addNewCancelHistory.bind(this)
                };
                let tableObj2 = new tableMaker(null, functionArray, formStyleList, null, this.props.dispatch, tableObjData);
                this.setState({tableObj: tableObj2, showModuleView: false});
            }.bind(this),50);
        }.bind(this)));
        window.addEventListener('resize', this.handleResize.bind(this));
        window.dispatchEvent(new Event('true_form_ready'));
    }

    updateTable(tableObj){
        this.setState({tableObj:tableObj});
        setTimeout(function () {
            this.saveTempModule(true);
        }.bind(this),100)
    }

    clickSplit(){
        this.props.dispatch(removeOverLayByName(overLayNames.FORM_MENU_MODAL));
        if(this.tdIds.length == 1) {
            const {tableObj} = this.state;
            if (tableObj) {
                tableObj.split(this.tdIds[0]);
                // this.setState({tableObj: tableObj})
                this.updateTable(tableObj);
            }
            this.tdIds = [];
        } else {

        }
    }

    deleteComponent(tdId,componentId){
        const {tableObj} = this.state;
        if(tableObj){
            tableObj.deleteComponent(tdId,componentId);
            this.updateTable(tableObj);
            // this.setState({tableObj: tableObj});
        }
    }

    onComponentDrop(tdId,componentType){
        console.log(tdId,componentType);
        const {tableObj} = this.state;
        const {formStyleList,formStyleId} = this.props;
        if(tableObj){
            tableObj.insertComponent(tdId,componentType,formStyleList,formStyleId);
            this.updateTable(tableObj);
            // this.setState({tableObj: tableObj});
        }
    }

    afterUpdateStyle(){
        const {tableObj} = this.state;
        if(tableObj){
            setTimeout(function(){
                const {formStyleList,formStyleId} = this.props;
                tableObj.setStyle(formStyleList,formStyleId);
                this.updateTable(tableObj);
                // this.setState({tableObj: tableObj});
                //setTimeout(function () {
                //    this.saveTempModule(true);
                //}.bind(this),100)
            }.bind(this),50);
        }
    }

    clickMerge(){
        this.props.dispatch(removeOverLayByName(overLayNames.FORM_MENU_MODAL));
        if(this.tdIds.length > 1) {
            const {tableObj} = this.state;
            if (tableObj) {
                let isSuccess = tableObj.merge(this.tdIds);
                console.log('isSuccess',isSuccess);
                if(isSuccess) {
                    // this.setState({tableObj: tableObj});
                    this.updateTable(tableObj);
                } else {

                }
                this.tdIds = [];
            }
        } else {

        }
    }

    addNewHistory(type,data,isClearCancelHistory=true){
        while(this.historyList.length >= 20){
            this.historyList.shift();
        }
        this.historyList.push(new HistoryItem(type,data));
        if(isClearCancelHistory){
            this.backHistoryList = [];
        }
    }

    addNewCancelHistory(type,data){
        this.backHistoryList.push(new HistoryItem(type,data));
    }

    goBack(isCancel = false){
        const {formStyleList,formStyleId} = this.props;
        let item =  isCancel?this.backHistoryList.pop() : this.historyList.pop();
        console.log(item);
        if(item) {
            if (item.type == operationType.CHOOSE_STYLE) {
                if(!isCancel){
                    this.addNewCancelHistory(operationType.CHOOSE_STYLE,{styleId: formStyleId});
                } else {
                    this.addNewHistory(operationType.CHOOSE_STYLE,{styleId:formStyleList},false)
                }
                this.props.dispatch(updateCurrentStyleId(item.data.styleId));
                this.afterUpdateStyle();
                return;
            }
            if (item.type == operationType.ADD_STYLE || item.type == operationType.SET_STYLE) {
                if(!isCancel){
                    this.addNewCancelHistory(item.type,{list:cloneDataArray(formStyleList)});
                } else {
                    this.addNewHistory(item.type,{list:cloneDataArray(formStyleList)},false);
                }
                this.props.dispatch(resetStyleList(item.data.list,this.afterUpdateStyle.bind(this)));
                return;
            }
            const {MERGE_TDS,SPLIT_TDS,ADD_TDS,DEL_TDS} = operationType;
            if([MERGE_TDS,SPLIT_TDS,ADD_TDS,DEL_TDS].indexOf(item.type) >= 0){
                const {tableObj} = this.state;
                if(tableObj){
                    tableObj.goBack(item,isCancel);
                }
                this.afterUpdateStyle();
                return;
            }
            const {SET_TD_STYLE,ADD_ITEM,DEL_ITEM,ITEM_SET_STYLE} = operationType;
            if([SET_TD_STYLE,ADD_ITEM,DEL_ITEM,ITEM_SET_STYLE].indexOf(item.type) >= 0){
                const {tableObj} = this.state;
                if(tableObj){
                    tableObj.tdGoBack(item,isCancel);
                }
                this.afterUpdateStyle();
            }
        }
    }

    cancelGoBack(){
        let item = this.backHistoryList.pop();
        this.historyList.push(item);
    }

    generateTable(num1, num2){
        this.historyList = [];
        this.backHistoryList = [];
        let generateFunc = generate.bind(this);
        const {tableObj} = this.state;
        if(tableObj) {
            this.props.dispatch(showOverLayByName(overLayNames.PROMPT_MODAL,{content:'继续会丢失当前的工作，确认继续吗？',cb:function(isTrue){
                if(isTrue){
                    generateFunc(num1,num2);
                }
            }.bind(this)}))
        } else {
            generateFunc(num1,num2);
        }
        function generate(num1, num2){
            this.setState({tableObj:null});
            setTimeout(function () {
                this.tdIds = [];
                const {formStyleList,formStyleId,dispatch} = this.props;
                let posInfo = {row:num1,col:num2,width:820,height:962};
                let functionArray = {
                    onTdClick:this.onTdClick.bind(this),
                    onTdContext:this.onTdContext.bind(this),
                    onComponentDrop:this.onComponentDrop.bind(this),
                    onComponentContext:this.onComponentContext.bind(this),
                    afterUpdateStyle:this.afterUpdateStyle.bind(this),
                    onDeleteComponent:this.deleteComponent.bind(this),
                    addNewHistory:this.addNewHistory.bind(this),
                    addNewCancelHistory:this.addNewCancelHistory.bind(this)
                };
                let tableObj2 = new tableMaker(posInfo,functionArray,formStyleList,formStyleId,dispatch);
                // this.setState({tableObj:tableObj2});
                this.updateTable(tableObj2);
                //setTimeout(function () {
                //    this.saveTempModule(true);
                //}.bind(this),100)
            }.bind(this),20);
        }
    }

    onTdContext(data){
        this.props.dispatch(showOverLayByName(overLayNames.FORM_MENU_MODAL,{
            posInfo:data,
            merge:this.clickMerge.bind(this),
            split:this.clickSplit.bind(this),
            cancel:this.onMenuCancel.bind(this)
        }));
    }

    onComponentContext(data){
        this.props.dispatch(showOverLayByName(overLayNames.COMPONENT_STYLE_EDITOR,{
            data:data,
            confirm:this.componentClickConfirm.bind(this),
            cancel:this.componentClickCancel.bind(this)
        }))
    }

    componentClickConfirm(tdId,id){
        this.props.dispatch(removeOverLayByName(overLayNames.COMPONENT_STYLE_EDITOR));
        const {tableObj} = this.state;
        if(tableObj){
            tableObj.setComponentStyle(tdId,id,{color:'red'});
            this.setState({tableObj:tableObj})
        }
    }

    componentClickCancel(){
        this.props.dispatch(removeOverLayByName(overLayNames.COMPONENT_STYLE_EDITOR))
    }

    onMenuCancel(){
        this.props.dispatch(removeOverLayByName(overLayNames.FORM_MENU_MODAL));
    }

    exportData(){
        this.tdIds = [];
        const {tableObj} = this.state;
        if(tableObj) {
            const {formStyleId,formStyleMaxId,formStyleList} = this.props;
            this.setState({tableObj: tableObj});
            setTimeout(function () {
                let ll = tableObj.exportData();
                ll.currentStyleId = formStyleId;
                ll.formStyleMaxId = formStyleMaxId;
                ll.formStyleList = formStyleList;
                this.tableDataTosave = JSON.stringify(ll);
                let tableNode = document.getElementsByTagName('table')[0];
                let tds = tableNode.getElementsByTagName('td');
                let clientWidthArr = [];
                let clientHeightArr = [];
                for(let i=1;i<tds.length;i++){
                    const {offsetWidth,offsetHeight} = tds[i];
                    clientWidthArr.push(offsetWidth);
                    clientHeightArr.push(offsetHeight);
                }
                for(let i=0;i<clientWidthArr.length;i++){
                    tds[i+1].style.width = (Math.ceil(clientWidthArr[i])) + 'px';
                    tds[i+1].style.height = (Math.ceil(clientHeightArr[i])) + 'px';
                }

                if(window['true_form_exportData_outer']){
                    window['true_form_exportData_outer'](getTableHtml(tableNode.outerHTML,this.tableDataTosave));
                } else {
                    let blob = new Blob([getTableHtml(tableNode.outerHTML, this.tableDataTosave)], {type: 'text/plain;charset=utf-8'});
                    saveAs(blob, 'form.html');
                }
                this.props.dispatch(deleteTempModule(1));
            }.bind(this), 20);
        }
    }

    showModuleView(){
        const {showModuleView} =this.state;
        this.setState({showModuleView:!showModuleView})
    }

    renderContent(){
        const {showModuleView} = this.state;
        if(showModuleView){
            return <ModuleContainer moduleArray={tableModuleArray} importDataFromModule={this.importDataFromModule.bind(this)}/>
        } else {
            const {tableObj} = this.state;
            if(tableObj){
                return tableObj.getNode(this.tdIds);
            }
        }
    }

    importDataFromModule(data){
        this.historyList = [];
        this.backHistoryList = [];
        const {tableObj} = this.state;
        let importDataFunc = importData.bind(this);
        if(tableObj){
            this.props.dispatch(showOverLayByName(overLayNames.PROMPT_MODAL,{content:'继续会丢失当前的工作，确认继续吗？',cb:function(isTrue){
                if(isTrue){
                    importDataFunc(data);
                } else {
                    const {tableObj} = this.state;
                    this.setState({tableObj: tableObj});
                }
            }.bind(this)}))
        } else {
            importDataFunc(data);
        }
        function importData(data){
            const {currentStyleId, formStyleList} = data;
            this.props.dispatch(updateCurrentStyleId(currentStyleId));
            this.props.dispatch(resetStyleList(formStyleList,generate2.bind(this)));
            this.setState({tableObj:null});
            function generate2() {
                setTimeout(function () {
                    this.tdIds = [];
                    this.historyList = [];
                    this.backHistoryList = [];
                    const {formStyleList, dispatch} = this.props;
                    let functionArray = {
                        onTdClick: this.onTdClick.bind(this),
                        onTdContext: this.onTdContext.bind(this),
                        onComponentDrop: this.onComponentDrop.bind(this),
                        onComponentContext: this.onComponentContext.bind(this),
                        afterUpdateStyle: this.afterUpdateStyle.bind(this),
                        onDeleteComponent: this.deleteComponent.bind(this),
                        addNewHistory: this.addNewHistory.bind(this),
                        addNewCancelHistory: this.addNewCancelHistory.bind(this)
                    };
                    let tableObj2 = new tableMaker(null, functionArray, formStyleList, null, dispatch, data);
                    this.setState({tableObj: tableObj2, showModuleView: false});
                }.bind(this), 50);
            }
        }
    }

    importData(recoverData){
        this.historyList = [];
        this.backHistoryList = [];
        const {tableObj} = this.state;
        let importDataFunc = importData.bind(this);
        if(recoverData) {
            if (tableObj) {
                this.props.dispatch(showOverLayByName(overLayNames.PROMPT_MODAL, {
                    content: '继续会丢失当前的工作，确认继续吗？', cb: function (isTrue) {
                        if (isTrue) {
                            importDataFunc(recoverData);
                        } else {
                            const {tableObj} = this.state;
                            this.setState({tableObj: tableObj});
                        }
                    }.bind(this)
                }));
            } else {
                importDataFunc(recoverData);
            }
        }
        function importData(recoverData){
            this.tableDataTosave = recoverData;
            let tableData = JSON.parse(recoverData);
            const {currentStyleId, formStyleList} = tableData;
            this.props.dispatch(updateCurrentStyleId(currentStyleId));
            this.props.dispatch(resetStyleList(formStyleList,generate.bind(this)));
            this.setState({tableObj:null});
            function generate() {
                setTimeout(function () {
                    this.backHistoryList = [];
                    this.historyList = [];
                    this.tdIds = [];
                    const {formStyleList, dispatch} = this.props;
                    let functionArray = {
                        onTdClick: this.onTdClick.bind(this),
                        onTdContext: this.onTdContext.bind(this),
                        onComponentDrop: this.onComponentDrop.bind(this),
                        onComponentContext: this.onComponentContext.bind(this),
                        afterUpdateStyle: this.afterUpdateStyle.bind(this),
                        onDeleteComponent: this.deleteComponent.bind(this),
                        addNewHistory: this.addNewHistory.bind(this),
                        addNewCancelHistory: this.addNewCancelHistory.bind(this)
                    };
                    let tableObj2 = new tableMaker(null, functionArray, formStyleList, null, dispatch, tableData);
                    this.setState({tableObj: tableObj2});
                }.bind(this), 50);
            }
        }
    }

    saveTempModule(autoSave = false){
        const {tableObj} = this.state;
        const {formStyleList,formStyleId,formStyleMaxId} = this.props;
        if(tableObj){
            let exportData = tableObj.exportData();
            exportData.currentStyleId = formStyleId;
            exportData.formStyleList = formStyleList;
            this.props.dispatch(saveTempModule(1,exportData,function () {
                if(!autoSave) {
                    alert('保存成功');
                }
            }));
        }
    }

    render(){
        const {height,showModuleView} = this.state;
        const {dispatch,formStyleList,formStyleId,formStyleMaxId} = this.props;
        let formStyle = {list:formStyleList,id:formStyleId,maxId:formStyleMaxId};
        let toolBarData = {formStyle:formStyle,dispatch:dispatch,showModuleView2:showModuleView,style:{position:'absolute'}};
        toolBarData = {
            ...toolBarData,
            afterUpdateStyle:this.afterUpdateStyle.bind(this),
            generateTable:this.generateTable.bind(this),
            exportData:this.exportData.bind(this),
            importData:this.importData.bind(this),
            showModuleView:this.showModuleView.bind(this),
            addNewHistory:this.addNewHistory.bind(this),
            goBack:this.goBack.bind(this),
            saveTempModule:this.saveTempModule.bind(this)
        };
        return(
            <div className="abc-form-container">
                <ToolBar data={toolBarData}/>
                <div className="abc-form-container-body" style={{height:height+'px',marginTop:'55px'}}>
                    <div style={{
                        width:"100%",
                        height:(height-20)+'px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div className="abc-form-container-body-table" style={{
                            height:(height)+'px',
                            marginTop:'-10px'
                        }}>
                        </div>
                        <div style={{
                            marginTop: -height+'px',
                            height: height+'px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        formStyleMaxId:state.form.maxId,
        formStyleList:state.form.formStyleList,
        formStyleId:state.form.currentId
    }
}

export default connect(mapStateToProps)(FormPage);