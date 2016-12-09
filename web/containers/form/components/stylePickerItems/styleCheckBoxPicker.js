/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'

export default class StyleCheckBoxPicker extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {checkbox} = this.refs;
        return checkbox.checked;
    }

    render(){
        const {title,text,value} = this.props;
        return (
            <div className="true-form-tool-bar-style-editor-font-family">
                <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-family-text">{title}</div>
                <div className="true-form-tool-bar-style-editor-font-family-container">
                    <input ref={'checkbox'} defaultChecked={value} type="checkbox"/>
                    <div>{text ? text : ''}</div>
                </div>
            </div>
        )
    }
}