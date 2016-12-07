/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'
import NumberPicker from '../../../components/number-picker'

export default class ToolBarEditDisplay extends Component{
    constructor() {
        super();
    }

    onConfirmClick(){
        const {generateTable,confirmClick} = this.props.data;
        const {numberPicker1,numberPicker2} = this.refs;
        generateTable(numberPicker1.getNumber(),numberPicker2.getNumber());
        confirmClick();
    }

    render(){
        const {} = this.props;
        return (
            <div className="abc-form-tool-bar-edit-display-container">
                <div className="abc-form-tool-bar-edit-display-container-header">
                    <div className="abc-form-tool-bar-edit-display-container-header-text">{'插入表格'}</div>
                </div>
                <div className="abc-form-tool-bar-edit-display-container-body">
                    <div className="abc-form-tool-bar-edit-display-container-body-row">
                        <div className="abc-form-tool-bar-edit-display-container-body-row-text">{'行数:'}</div>
                        <div className="abc-form-tool-bar-edit-display-container-body-row-picker">
                            <NumberPicker value={16} ref="numberPicker1"/>
                        </div>
                    </div>
                    <div className="abc-form-tool-bar-edit-display-container-body-col">
                        <div className="abc-form-tool-bar-edit-display-container-body-col-text">{'列数:'}</div>
                        <div className="abc-form-tool-bar-edit-display-container-body-col-picker">
                            <NumberPicker value={7} ref="numberPicker2"/>
                        </div>
                    </div>
                    <div className="abc-form-tool-bar-edit-confirm-btn" onClick={()=>{this.onConfirmClick()}}>{'插入'}</div>
                </div>
            </div>
        )
    }
}