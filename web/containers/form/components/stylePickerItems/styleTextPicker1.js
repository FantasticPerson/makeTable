/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'

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
        return(
            <div  style={{
                flexDirection:'row',
                alignItems:'center',
                display:'inline-flex',
                padding:'3px',
                width:'150px'
            }}>
                <div style={{
                    marginTop: '3px',
                    marginRight: '3px',
                    width: '48px'
                }}>{title}</div>
                <div className="abc-form-tool-bar-style-editor-text-picker">
                    <input type="text" ref='textPicker' defaultValue={(text?text:null)}/>
                </div>
            </div>
        )
    }
}