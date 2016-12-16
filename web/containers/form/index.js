/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import * as overLayNames from '../../constants/OverLayNames'
import ToolBar from './components/toolbar'
import tableMaker from './utils/tableMaker'
import {formDefaultStyle,getTableHtml,tableModuleArray} from './const'
import {showOverLayByName,removeOverLayByName} from '../../actions/view'
import {updateCurrentStyleId,updateStyleList,updateMaxId} from '../../actions/form'
import HistoryItem from './utils/history/historyItem'
import ModuleContainer from './components/module/moduleContainer'
import saveAs from 'save-as'

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
        this.setState({tableObj: tableObj});
    }

    handleResize(){
        const {innerHeight} = window;
        this.setState({height:innerHeight-60});
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize.bind(this));
        this.props.dispatch(updateStyleList(formDefaultStyle));
        this.props.dispatch(updateCurrentStyleId(formDefaultStyle[0].id));
        this.props.dispatch(updateMaxId(formDefaultStyle[0].id));
    }

    clickSplit(){
        this.props.dispatch(removeOverLayByName(overLayNames.FORM_MENU_MODAL));
        if(this.tdIds.length == 1) {
            const {tableObj} = this.state;
            if (tableObj) {
                tableObj.split(this.tdIds[0]);
                this.setState({tableObj: tableObj})
            }
            this.tdIds = [];
        } else {

        }
    }

    deleteComponent(tdId,componentId){
        const {tableObj} = this.state;
        if(tableObj){
            tableObj.deleteComponent(tdId,componentId);
            this.setState({tableObj: tableObj});
        }
    }

    onComponentDrop(tdId,componentType){
        console.log(tdId,componentType);
        const {tableObj} = this.state;
        const {formStyleList,formStyleId} = this.props;
        if(tableObj){
            tableObj.insertComponent(tdId,componentType,formStyleList,formStyleId);
            this.setState({tableObj: tableObj});
        }
    }

    afterUpdateStyle(){
        const {tableObj} = this.state;
        if(tableObj){
            const {formStyleList,formStyleId} = this.props;
            tableObj.setStyle(formStyleList,formStyleId);
            this.setState({tableObj: tableObj})
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
                    this.setState({tableObj: tableObj});
                } else {

                }
                this.tdIds = [];
            }
        } else {

        }
    }

    addNewHistory(type,data){
        // let item = new HistoryItem(type,data);
        this.historyList.push(new HistoryItem(type,data));
        console.log(this.historyList);
    }

    goBack(){
        let item = this.historyList.pop();
        this.backHistoryList.push(item);
    }

    cancelGoBack(){
        let item = this.backHistoryList.pop();
        this.historyList.push(item);
    }

    handleRecover(){

    }

    generateTable(num1, num2){
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
            addNewHistory:this.addNewHistory.bind(this)
        };
        let tableObj2 = new tableMaker(posInfo,functionArray,formStyleList,formStyleId,dispatch);
        this.setState({tableObj:tableObj2});
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
                let blob = new Blob([getTableHtml((document.getElementsByTagName('table')[0]).outerHTML,this.tableDataTosave)], { type: 'text/plain;charset=utf-8' });
                // console.log([getTableHtml((document.getElementsByTagName('table')[0]).outerHTML,this.tableDataTosave)]);
                saveAs(blob, 'hello world.html');
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
        const {currentStyleId,formStyleMaxId,formStyleList} = data;
        this.props.dispatch(updateStyleList(formStyleList));
        this.props.dispatch(updateCurrentStyleId(currentStyleId));
        this.props.dispatch(updateMaxId(formStyleMaxId));
        setTimeout(function(){
            this.tdIds = [];
            const {formStyleList,dispatch} = this.props;
            let functionArray = {
                onTdClick:this.onTdClick.bind(this),
                onTdContext:this.onTdContext.bind(this),
                onComponentDrop:this.onComponentDrop.bind(this),
                onComponentContext:this.onComponentContext.bind(this),
                afterUpdateStyle:this.afterUpdateStyle.bind(this),
                onDeleteComponent:this.deleteComponent.bind(this),
                addNewHistory:this.addNewHistory.bind(this)
            };
            let tableObj2 = new tableMaker(null,functionArray,formStyleList,null,dispatch,data);
            this.setState({tableObj:tableObj2,showModuleView:false});
        }.bind(this),20);
    }

    importData(recoverData){
        if(recoverData){
            this.tableDataTosave = recoverData;
            let tableData = JSON.parse(recoverData);
            const {currentStyleId,formStyleMaxId,formStyleList} = tableData;
            this.props.dispatch(updateStyleList(formStyleList));
            this.props.dispatch(updateCurrentStyleId(currentStyleId));
            this.props.dispatch(updateMaxId(formStyleMaxId));
            setTimeout(function(){
                this.tdIds = [];
                const {formStyleList,formStyleId,dispatch} = this.props;
                let functionArray = {
                    onTdClick:this.onTdClick.bind(this),
                    onTdContext:this.onTdContext.bind(this),
                    onComponentDrop:this.onComponentDrop.bind(this),
                    onComponentContext:this.onComponentContext.bind(this),
                    afterUpdateStyle:this.afterUpdateStyle.bind(this),
                    onDeleteComponent:this.deleteComponent.bind(this)
                };
                let tableObj2 = new tableMaker(null,functionArray,formStyleList,null,dispatch,tableData);
                this.setState({tableObj:tableObj2});
            }.bind(this),20);
        }
    }

    render(){
        const {height} = this.state;
        const {dispatch,formStyleList,formStyleId,formStyleMaxId} = this.props;
        let formStyle = {list:formStyleList,id:formStyleId,maxId:formStyleMaxId};
        let toolBarData = {formStyle:formStyle,dispatch:dispatch,style:{position:'absolute'}};
        toolBarData = {
            ...toolBarData,
            afterUpdateStyle:this.afterUpdateStyle.bind(this),
            generateTable:this.generateTable.bind(this),
            exportData:this.exportData.bind(this),
            importData:this.importData.bind(this),
            showModuleView:this.showModuleView.bind(this),
            addNewHistory:this.addNewHistory.bind(this)

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