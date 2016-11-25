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
    }

    clickSplit(){
        const {tableObj} = this.state;
        if(tableObj){
            tableObj.splitTd(6);
            this.setState({tableObj:tableObj})
        }
    }

    clickMerge(){
        const {tableObj} = this.state;
        if(tableObj){
            tableObj.mergeTd(27,28);
            this.setState({tableObj:tableObj});
        }
    }

    clickGenerate(){
        let tableObj2 = new tableMaker(7,3,null);
        this.setState({tableObj:tableObj2});
    }

    clickSplitTr(){
        const {tableObj} = this.state;
        if(tableObj){
            console.log('is click splictTr');
            tableObj.splitTr(6);
            this.setState({tableObj:tableObj})
        }
    }

    clickMergeTr(){
        const {tableObj} = this.state;
        if(tableObj){
            tableObj.mergeTr(6,21);
            this.setState({tableObj:tableObj});
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
                        <div onClick={()=>{this.clickSplit()}}>td分离</div>
                        <div onClick={()=>{this.clickMerge()}}>td组合</div>
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