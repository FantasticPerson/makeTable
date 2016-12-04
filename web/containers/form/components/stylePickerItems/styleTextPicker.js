/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import NumberPicker from '../../../../components/number-picker'

export default class StyleTextPicker extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {textPicker} = this.refs;
        return textPicker.value;
    }

    render(){
        const {title,text} = this.props;
        return(
            <div className="abc-form-tool-bar-style-editor-text-container">
                <div className="abc-form-tool-bar-style-editor-text-text">{title}</div>
                <div className="abc-form-tool-bar-style-editor-text-picker">
                    <input type="text" ref='textPicker' defaultValue={(text?text:null)}/>
                </div>
            </div>
        )
    }
}