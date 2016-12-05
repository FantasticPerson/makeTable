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
        const {title,size,unit,max,min} = this.props;
        return(
            <div className="abc-form-tool-bar-style-editor-number-container">
                <div className="abc-form-tool-bar-style-editor-number-text">{title}</div>
                <div className="abc-form-tool-bar-style-editor-number-picker">
                    <NumberPicker maxNum={max} minNum={min} ref='numberPicker' value={(size?size:null)}/>
                </div>
                <div className="abc-form-tool-bar-style-editor-number-unit">{unit?unit:''}</div>
            </div>
        )
    }
}