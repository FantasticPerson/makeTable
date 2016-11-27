/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import ToolBar from './components/toolbar'
import NumberPicker from '../../components/numberPicker'
import reactElementToJSXString  from 'react-element-to-jsx-string'
import tableMaker from './utils/tableMaker'
import jsxToString from 'jsx-to-string'

class FormPage extends Component{
    constructor(){
        super();
        this.state = {col:7,row:3,tableObj:null};
        this.tableObj = null;
        this.tdIds = [];
    }

    onTdItemClick(id,bool){
        console.log(id,bool);
        if(this.tdIds.indexOf(id) >= 0 && !bool){
            this.tdIds.splice(this.tdIds.indexOf(id),1);
        } else if(this.tdIds.indexOf(id) < 0 && bool){
            this.tdIds.push(id);
        }
        console.log(this.tdIds);
    }

    clickSplitTd(){
        if(this.tdIds.length == 1) {

            console.log('clickSplite');
            const {tableObj} = this.state;
            if (tableObj) {
                tableObj.splitTd(this.tdIds[0]);
                this.setState({tableObj: tableObj})
            }
            this.tdIds = [];
        } else {

        }
    }

    clickMergeTd(){
        if(this.tdIds.length > 1) {
            const {tableObj} = this.state;
            if (tableObj) {
                tableObj.mergeTd(27, 28);
                this.setState({tableObj: tableObj});
            }
        } else {

        }
    }

    clickGenerate(){
        let tableObj2 = new tableMaker(7,3,this.onTdItemClick.bind(this),null);
        this.setState({tableObj:tableObj2});
    }

    clickSplitTr(){
        if(this.tdIds.length == 1) {
            const {tableObj} = this.state;
            if (tableObj) {
                tableObj.splitTr(this.tdIds[0]);
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
                tableObj.mergeTr(6, 21);
                this.setState({tableObj: tableObj});
            }
        } else {

        }
    }

    render(){
        const {col,row,tableObj} = this.state;
        let node = tableObj ? tableObj.getNode() : null;
        return(
            <div className="true-form-container">
                <ToolBar>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div onClick={()=>{this.clickGenerate()}}>生成</div>
                        <div onClick={()=>{this.clickSplitTd()}}>td分离</div>
                        <div onClick={()=>{this.clickMergeTd()}}>td组合</div>
                        <div onClick={()=>{this.clickSplitTr()}}>tr分离</div>
                        <div onClick={()=>{this.clickMergeTr()}}>tr组合</div>
                    </div>
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
        title: state.demoPage.title
    }
}

export default connect(mapStateToProps)(FormPage);