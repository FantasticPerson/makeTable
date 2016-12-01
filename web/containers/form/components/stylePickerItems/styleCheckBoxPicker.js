/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'

export default class StyleCheckBoxPicker extends Component{
    constructor(){
        super();
    }

    render(){
        const {title} = this.props;
        return (
            <div className="true-form-tool-bar-style-editor-font-family">
                <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-family-text">{title}</div>
                <div className="true-form-tool-bar-style-editor-font-family-container">
                    <input type="checkbox"/>
                </div>
            </div>
        )
    }
}