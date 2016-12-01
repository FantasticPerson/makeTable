/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import NumberPicker from '../../../../components/number-picker'

export default class StyleNumberPicker extends Component{
    constructor(){
        super();
    }

    render(){
        const {title,size} = this.props;
        return(
            <div className="true-form-tool-bar-style-editor-border-size">
                <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-border-size-text">{title}</div>
                    <div className="true-form-tool-bar-style-editor-border-size-container">
                        <NumberPicker ref='numberPicker1' value={(size?size:null)}/>
                    </div>
                <div style={{marginLeft:'5px',marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-size-unit">{'(单位:px)'}</div>
            </div>
        )

    }
}