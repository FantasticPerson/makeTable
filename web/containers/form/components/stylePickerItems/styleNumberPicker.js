/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import NumberPicker from '../../../../components/number-picker'

export default class StyleNumberPicker extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {numberPicker} = this.refs;
        return numberPicker.getNumber();
    }

    render(){
        const {title,size,unit} = this.props;
        return(
            <div className="true-form-tool-bar-style-editor-border-size">
                <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-border-size-text">{title}</div>
                <div className="true-form-tool-bar-style-editor-border-size-container">
                    <NumberPicker ref='numberPicker' value={(size?size:null)}/>
                </div>
                <div style={{marginLeft:'5px',marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-size-unit">{unit?unit:''}</div>
            </div>
        )
    }
}