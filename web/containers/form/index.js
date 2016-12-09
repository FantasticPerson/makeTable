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
import OptionDataAddTool from '../../components/optionDataAddTool'
import NumberSetter from '../../components/numberSetter'
import RadioSelector from '../../components/checkSelector'
import saveAs from 'save-as'
// import readBlob from 'read-blob'
// import readFile from 'read-file'
// import fs from 'fs'

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
        // var browsersavefile = require( 'browsersavefile' );

        // var someHTML = [ '<div>HELLO WORLD</div>' ],
        //     blobData = new Blob( someHTML, {type : 'text/html'});

        // browsersavefile( 'my file', blobData );
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
                //file:///C:/Users/wdd/Downloads/hello%20world.html


                // readFile('file:///C:/Users/wdd/Downloads/hello%20world.html', {encoding: 'utf8'},function(err, buffer) {
                //     console.log(buffer);
                // });
            }.bind(this), 20);
        }
    }

    importData(){
        if(this.tableDataTosave){
            let tableData = JSON.parse(this.tableDataTosave);
            // let tableData =JSON.parse(tableRecoverData);
            const {currentStyleId,formStyleMaxId,formStyleList} = tableData;
            // this.styleId = recoverData.styleId;
            // this.styleArr = recoverData.styleArr;
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
                // console.log(tableObj2);

                this.setState({tableObj:tableObj2});
                // console.log(this.state.tableObj);
                // this.setState({tableObj:tableObj2});

            }.bind(this),20);

            // const {formStyleList,formStyleId,dispatch} = this.props;
            // let tableData = JSON.parse(this.tableDataTosave);
            // let tableObj = new tableMaker(null,null,null,null,dispatch,tableData);
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
            generateTable:this.generateTable.bind(this)
        };
        // let innerHeight = window.innerHeight;
        // let height = (innerHeight - 60) + 'px';
        return(
            <div className="abc-form-container">
                <ToolBar data={toolBarData}/>
                <div className="abc-form-container-body" style={{height:height+'px',marginTop:'55px'}}>
                    {/*<input type="file" multiple/>*/}
                    {/*<input type="file" id="FileUpload" onChange={(e)=>{*/}
                        {/*var theFiles = e.target.files;*/}
                        {/*var relativePath = theFiles[0].webkitRelativePath;*/}
                        {/*var folder = relativePath.split("/");*/}
                        {/*alert(folder[0]);*/}
                    {/*}} multiple />*/}
                    {/*<div onClick={()=>{this.exportData()}}>export</div>*/}
                    {/*<div onClick={()=>{this.importData()}}>import</div>*/}
                    {/*<OptionDataAddTool/>*/}
                    {/*<NumberSetter/>*/}
                    {/*<RadioSelector/>*/}
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