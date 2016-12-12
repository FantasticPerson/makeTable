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
            <div style={{
                flexDirection:'row',
                alignItems:'center',
                display:'inline-flex',
                padding:'3px',
                width:'150px'
            }}>
                <div  style={{
                    marginTop: '3px',
                    marginRight: '3px',
                    width: '48px'
                }}>{title}</div>
                <div className="abc-form-tool-bar-style-editor-number-picker">
                    <NumberSetter number={number} ref='numberSetter'/>
                </div>
                <div className="abc-form-tool-bar-style-editor-number-unit">{unit?unit:''}</div>
            </div>
        )
    }
}