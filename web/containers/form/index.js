/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import ToolBar from './components/toolbar'
import tableMaker from './utils/tableMaker'
import {showOverLayByName,removeOverLayByName} from '../../actions/view'
import * as overLayNames from '../../constants/OverLayNames'

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
        let tableObj2 = new tableMaker(num1,num2,this.onTdItemClick.bind(this),this.onRightClick.bind(this),null);
        this.setState({tableObj:tableObj2});
    }

    onRightClick(data){
        this.props.dispatch(showOverLayByName(overLayNames.FORM_MENU_MODAL,{posInfo:data,merge:this.clickMerge.bind(this),split:this.clickSplit.bind(this),cancel:this.onMenuCancel.bind(this)}));
    }

    onMenuCancel(){
        this.props.dispatch(removeOverLayByName(overLayNames.FORM_MENU_MODAL));
    }

    render(){
        const {tableObj} = this.state;
        let node = tableObj ? tableObj.getNode(this.tdIds) : null;
        return(
            <div className="true-form-container">
                <ToolBar formStyle={this.props.formStyle} dispatch={this.props.dispatch} style={{position:'absolute'}} clickGenerateTable={this.clickGenerateTable.bind(this)}>
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
        title: state.demoPage.title,
        formStyle:state.form.formStyle
    }
}

export default connect(mapStateToProps)(FormPage);