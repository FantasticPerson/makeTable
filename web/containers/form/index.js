/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import * as overLayNames from '../../constants/OverLayNames'
import ToolBar from './components/toolbar'
import tableMaker from './utils/tableMaker'
import {formDefaultStyle} from './const'
import {showOverLayByName,removeOverLayByName} from '../../actions/view'
import {updateCurrentStyleId,updateStyleList,updateMaxId} from '../../actions/form'
import OptionDataAddTool from '../../components/optionDataAddTool'
import NumberSetter from '../../components/numberSetter'

class FormPage extends Component{
    constructor(){
        super();
        this.state = {tableObj:null};
        this.tdIds = [];
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

    componentDidMount(){
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
        const {formStyleList,formStyleId} = this.props;
        let posInfo = {row:num1,col:num2,width:668,height:355};
        let functionArray = {
            onTdClick:this.onTdClick.bind(this),
            onTdContext:this.onTdContext.bind(this),
            onComponentDrop:this.onComponentDrop.bind(this),
            onComponentContext:this.onComponentContext.bind(this)
        };
        let tableObj2 = new tableMaker(posInfo,functionArray,formStyleList,formStyleId);
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


    render(){
        const {tableObj} = this.state;
        const {dispatch,formStyleList,formStyleId,formStyleMaxId} = this.props;
        let node = tableObj ? tableObj.getNode(this.tdIds) : null;
        let formStyle = {list:formStyleList,id:formStyleId,maxId:formStyleMaxId};
        let toolBarData = {formStyle:formStyle,dispatch:dispatch,style:{position:'absolute'}};
        toolBarData = {
            ...toolBarData,
            afterUpdateStyle:this.afterUpdateStyle.bind(this),
            generateTable:this.generateTable.bind(this)
        };
        return(
            <div className="abc-form-container">
                <ToolBar data={toolBarData}/>
                <div className="abc-form-container-body">
                    {/*<OptionDataAddTool/>*/}
                    {/*<NumberSetter/>*/}
                    <div className="abc-form-container-body-table">
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