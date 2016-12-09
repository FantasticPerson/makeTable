/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import * as overLayNames from '../../constants/OverLayNames'
import ToolBar from './components/toolbar'
import tableMaker from './utils/tableMaker'
import {formDefaultStyle,getTableHtml} from './const'
import {showOverLayByName,removeOverLayByName} from '../../actions/view'
import {updateCurrentStyleId,updateStyleList,updateMaxId} from '../../actions/form'
import saveAs from 'save-as'

class FormPage extends Component{
    constructor(){
        super();
        this.state = {tableObj:null,height:window.innerHeight - 60};
        this.tdIds = [];
        this.tableDataTosave = null;
    }

    onTdClick(id){
        if(this.tdIds.indexOf(id) >= 0){
            this.tdIds.splice(this.tdIds.indexOf(id),1);
        } else if(this.tdIds.indexOf(id) < 0){
            this.tdIds.push(id);
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
            const {formStyleList} = this.props;
            tableObj.setStyle(formStyleList);
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
            onDeleteComponent:this.deleteComponent.bind(this)
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
                saveAs(blob, 'hello world.html');
            }.bind(this), 20);
        }
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
        const {tableObj,height} = this.state;
        const {dispatch,formStyleList,formStyleId,formStyleMaxId} = this.props;
        let node = tableObj ? tableObj.getNode(this.tdIds) : null;
        let formStyle = {list:formStyleList,id:formStyleId,maxId:formStyleMaxId};
        let toolBarData = {formStyle:formStyle,dispatch:dispatch,style:{position:'absolute'}};
        toolBarData = {
            ...toolBarData,
            afterUpdateStyle:this.afterUpdateStyle.bind(this),
            generateTable:this.generateTable.bind(this),
            exportData:this.exportData.bind(this),
            importData:this.importData.bind(this)
        };
        return(
            <div className="abc-form-container">
                <ToolBar data={toolBarData}/>
                <div className="abc-form-container-body" style={{height:height+'px',marginTop:'55px'}}>
                    {/*<div onClick={()=>{this.exportData()}}>export</div>*/}
                    {/*<div onClick={()=>{this.importData()}}>import</div>*/}
                    {/*<input type='file' accept='text/html' onChange={(e)=>{*/}
                        {/*let input = e.target;*/}
                        {/*let reader = new FileReader();*/}
                        {/*reader.onload=function(){*/}
                            {/*let text = reader.result;*/}
                            {/*console.log(text);*/}
                            {/*let index = text.search(/<div class='recoverData' style='display: none'>/);*/}
                            {/*let recoverData = text.slice(index+"<div class='recoverData' style='display: none'>".length,-("</div></html>".length));*/}
                        {/*}*/}
                        {/*reader.readAsText(input.files[0]);*/}
                    {/*}}/>*/}
                    <div className="abc-form-container-body-table" style={{height:(height-20)+'px'}}>
                        {node}
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