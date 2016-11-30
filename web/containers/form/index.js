/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import ToolBar from './components/toolbar'
// import NumberPicker from '../../components/numberPicker'
// import reactElementToJSXString  from 'react-element-to-jsx-string'
import tableMaker from './utils/tableMaker'
// import jsxToString from 'jsx-to-string'

// import NumberPicker from './components/number-picker';
import {showOverLayByName,removeOverLayByName} from '../../actions/view'
import * as overLayNames from '../../constants/OverLayNames'
import ColorPicker from './components/colorPicker'

class FormPage extends Component{
    constructor(){
        super();
        this.state = {col:7,row:3,tableObj:null};
        this.tableObj = null;
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
        console.log(this.tdIds);
    }

    clickSplitTd(){
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

    clickMergeTd(){
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

    clickSplitTr(){
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

    clickMergeTr(){
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

    onRightClick(data){
        this.props.dispatch(showOverLayByName(overLayNames.FORM_MENU_MODAL,{posInfo:data,merge:this.clickMergeTd.bind(this),split:this.clickSplitTd.bind(this),cancel:this.onMenuCancel.bind(this)}));
    }

    onMenuCancel(){
        this.props.dispatch(removeOverLayByName(overLayNames.FORM_MENU_MODAL));
    }

    render(){
        const {col,row,tableObj} = this.state;
        let node = tableObj ? tableObj.getNode(this.tdIds) : null;
        return(
            <div className="true-form-container">
                <ToolBar formStyle={this.props.formStyle} dispatch={this.props.dispatch} style={{position:'absolute'}} clickGenerateTable={this.clickGenerateTable.bind(this)}>
                    {/*<div style={{display:'flex',flexDirection:'row'}}>*/}
                        {/*<div onClick={()=>{this.clickGenerate()}}>生成</div>*/}
                        {/*<div onClick={()=>{this.clickSplitTd()}}>td分离</div>*/}
                        {/*<div onClick={()=>{this.clickMergeTd()}}>td组合</div>*/}
                        {/*<div onClick={()=>{this.clickSplitTr()}}>tr分离</div>*/}
                        {/*<div onClick={()=>{this.clickMergeTr()}}>tr组合</div>*/}
                    {/*</div>*/}
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