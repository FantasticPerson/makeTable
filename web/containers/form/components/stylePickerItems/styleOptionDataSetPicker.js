/**
 * Created by wdd on 2016/12/5.
 */
import React,{Component,PropTypes} from 'react'
import OptionDataAddTool from '../../../../components/optionDataAddTool'

export default class StyleNumberPicker extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {optionDataPicker} = this.refs;
        return optionDataPicker.getValue();
    }

    render(){
        const {title,dataArray} = this.props;
        return(
            <div className="abc-form-tool-bar-style-editor-option-data-container">
                <div className="abc-form-tool-bar-style-editor-option-data-text">{title}</div>
                <div className="abc-form-tool-bar-style-editor-option-data-picker">
                    <OptionDataAddTool dataArray={dataArray} ref='optionDataPicker'/>
                </div>
            </div>
        )
    }
}
