/**
 * Created by wdd on 2016/12/5.
 */
import React,{Component,PropTypes} from 'react'
import NumberSetter from '../../../../components/numberSetter'

export default class StyleNumberSetter extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {numberSetter} = this.refs;
        return numberSetter.getNumber();
    }

    render(){
        const {title,unit,number} = this.props;
        return(
            <div className="abc-form-tool-bar-style-editor-number-container">
                <div className="abc-form-tool-bar-style-editor-number-text">{title}</div>
                <div className="abc-form-tool-bar-style-editor-number-picker">
                    <NumberSetter number={number} ref='numberSetter'/>
                </div>
                <div className="abc-form-tool-bar-style-editor-number-unit">{unit?unit:''}</div>
            </div>
        )
    }
}