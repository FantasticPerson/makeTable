/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../../../../components/colorPicker'
import ColorPicker1 from '../../../../components/colorPicker1'

export default class StyleColorPicker extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {colorPicker} = this.refs;
        return colorPicker.getColor();
    }

    render(){
        const {title,color} = this.props;
        return (
            <div style={{
                flexDirection:'row',
                alignItems:'center',
                display:'inline-flex',
                padding:'3px',
                width:'200px'
            }}>
                <div style={{
                    marginTop: '3px',
                    marginRight: '3px',
                    width: '48px'
                }}>{title}</div>
                <div className="abc-form-tool-bar-style-editor-color-picker">
                    <ColorPicker1 ref='colorPicker' color={(color ? color : null)}/>
                </div>
            </div>
        )
    }
}