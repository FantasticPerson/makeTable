/**
 * Created by wdd on 2016/12/11.
 */
import React,{Component,PropTypes} from 'react'
import StyleEditorItem from '../stylePickerItems/styleEditorItemPicker'
import {editorNumberPicker,editorDropBoxPicker,editorColorPicker,textAlignPosition} from '../../const'

export default class BorderStyleEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {colorPicker,textAlignPicker,borderSizePicker} = this.refs;
        return {
            borderColor:colorPicker.getValue(),
            textAlign:textAlignPicker.getValue(),
            borderSize:borderSizePicker.getValue()
        }
    }

    render(){
        const {style} = this.props.data;
        console.log(style);
        return (
            <div  style={{backgroundColor:'#FFF'}}>
                <StyleEditorItem ref="colorPicker" type={editorColorPicker} title="边框颜色" data={{color:style.borderColor}}/>
                <div style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <StyleEditorItem ref="textAlignPicker" type={editorDropBoxPicker} title="元素布局" data={{groupData:textAlignPosition,selectedValue:style.textAlign}}/>
                    <StyleEditorItem ref="borderSizePicker" type={editorNumberPicker} title="边框粗细" data={{size:style.borderSize}}/>
                </div>
            </div>
        )
    }
}