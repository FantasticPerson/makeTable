/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import ToolBar from './components/toolbar'
import tableMaker from './utils/tableMaker'
import {showOverLayByName,removeOverLayByName} from '../../actions/view'
import * as overLayNames from '../../constants/OverLayNames'
import {formDefaultStyle} from './const'
import {updateCurrentStyleId,updateStyleList,updateMaxId} from '../../actions/form'

class FormPage extends Component{
    constructor(){
        super();
        this.state = {tableObj:null};
        this.tdIds = [];
    }

    onTdItemClick(id){
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
        if(tableObj){
            tableObj.insertComponent(tdId,componentType);
            this.setState({tableObj: tableObj});
        }
    }

    onUpdateStyle(){
        const {tableObj} = this.state;
        if(tableObj){
            const {formStyleList,formStyleId} = this.props;
            let formStyle = formStyleList.find(function(item){
                return item.id == formStyleId
            });
            tableObj.setStyle(formStyle);
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

    clickGenerateTable(num1,num2){
        const {formStyleList,formStyleId} = this.props;
        let formStyle = formStyleList.find(function(item){
            return item.id == formStyleId
        });
        let tableObj2 = new tableMaker(num1,num2,this.onTdItemClick.bind(this),this.onTdRightClick.bind(this),this.onComponentDrop.bind(this),this.onComponentRightClick.bind(this),formStyle);
        this.setState({tableObj:tableObj2});
    }

    onTdRightClick(data){
        this.props.dispatch(showOverLayByName(overLayNames.FORM_MENU_MODAL,{posInfo:data,merge:this.clickMerge.bind(this),split:this.clickSplit.bind(this),cancel:this.onMenuCancel.bind(this)}));
    }

    onComponentRightClick(data){
        this.props.dispatch(showOverLayByName(overLayNames.COMPONENT_STYLE_EDITOR,{data:data,confirm:this.componentClickConfirm.bind(this),cancel:this.componentClickCancel.bind(this)}))
    }

    componentClickConfirm(tdId,id,style){
        this.props.dispatch(removeOverLayByName(overLayNames.COMPONENT_STYLE_EDITOR));
        console.log('click confirm');
        console.log(tdId,id);
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
        const {tableObj,id} = this.state;
        let node = tableObj ? tableObj.getNode(this.tdIds) : null;
        let formStyle = {list:this.props.formStyleList,id:this.props.formStyleId,maxId:this.props.formStyleMaxId};
        return(
            <div className="true-form-container">
                <ToolBar formStyle={formStyle} dispatch={this.props.dispatch} style={{position:'absolute'}} onUpdateStyle={this.onUpdateStyle.bind(this)} clickGenerateTable={this.clickGenerateTable.bind(this)}>
                </ToolBar>
                <div className="true-form-body-container">
                    <div className="true-form-body-form-container">
                        {node}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        formStyleList:state.form.formStyleList,
        formStyleId:state.form.currentId,
        formStyleMaxId:state.form.maxId
    }
}

export default connect(mapStateToProps)(FormPage);