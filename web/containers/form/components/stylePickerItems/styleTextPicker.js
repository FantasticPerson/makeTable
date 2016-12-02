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
        console.log('text:'+text);
        return(
            <div className="true-form-tool-bar-style-editor-border-size">
                <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-border-size-text">{title}</div>
                <div className="true-form-tool-bar-style-editor-border-size-container">
                    <input type="text" ref='textPicker' defaultValue={(text?text:null)}/>
                </div>
                <div style={{marginLeft:'5px',marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-size-unit">{}</div>
            </div>
        )
    }
}