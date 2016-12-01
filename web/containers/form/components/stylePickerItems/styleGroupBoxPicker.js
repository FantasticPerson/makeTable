/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'

export default class StyleGroupBoxPicker extends Component{
    constructor(){
        super();
    }

    render(){
        const {title,groupData} = this.props;

        return (
            <div className="true-form-tool-bar-style-editor-font-family">
                <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-family-text">{title}</div>
                <div className="true-form-tool-bar-style-editor-font-family-container">
                    <ItemSelector optionDataArray ={groupData}/>
                </div>
            </div>
        )
    }
}