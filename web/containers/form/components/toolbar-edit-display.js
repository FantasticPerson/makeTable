/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'
import NumberPicker from '../../../components/number-picker'

export default class ToolBarEditDisplay extends Component{
    constructor() {
        super();
    }

    onConfirmClickHandler(){
        const {clickGenerateTable,onConfirmClick} = this.props;
        const {numberPicker1,numberPicker2} = this.refs;
        clickGenerateTable(numberPicker1.getNumber(),numberPicker2.getNumber());
        onConfirmClick();
    }

    render(){
        const {} = this.props;
        return (
            <div className="true-form-tool-bar-edit-display-container">
                <div className="true-form-tool-bar-edit-display-header">
                    <div className="true-form-tool-bar-edit-display-header-text">{'插入表格'}</div>
                </div>
                <div className="true-form-tool-bar-edit-display-body">
                    <div className="true-form-tool-bar-edit-display-body-row">
                        <div className="true-form-tool-bar-edit-display-body-row-text">{'行数:'}</div>
                        <div className="true-form-tool-bar-edit-display-body-row-picker">
                            <NumberPicker ref="numberPicker1"/>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-edit-display-body-col">
                        <div className="true-form-tool-bar-edit-display-body-col-text">{'列数:'}</div>
                        <div className="true-form-tool-bar-edit-display-body-col-picker">
                            <NumberPicker ref="numberPicker2"/>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-edit-display-confirm-btn" onClick={()=>{this.onConfirmClickHandler()}} style={{marginLeft:'60px'}}>{'插入'}</div>
                </div>
            </div>
        )
    }
}