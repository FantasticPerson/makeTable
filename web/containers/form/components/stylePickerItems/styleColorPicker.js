/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../../../../components/colorPicker'

export default class StyleColorPicker extends Component{
    constructor(){
        super();
    }

    render(){
        const {title,color} = this.props;
        return (
            <div className="true-form-tool-bar-style-editor-color">
                <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-color-text">{title}</div>
                <div className="true-form-tool-bar-style-editor-color-container">
                    <ColorPicker ref='colorPicker' color={(color ? color.borderColor : null)}/>
                </div>
            </div>
        )
    }
}