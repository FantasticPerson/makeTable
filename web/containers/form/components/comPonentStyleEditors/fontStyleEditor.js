/**
 * Created by wdd on 2016/12/10.
 */
import React,{Component,PropTypes} from 'react'
import StyleEditorItemPicker from '../stylePickerItems/styleEditorItemPicker'
import {
    fontStyleArray,
    fontFamilyList,
    editorCheckBoxPicker,
    editorDropBoxPicker,
    editorColorPicker,
    editorNumberPicker} from '../../const'

export default class FontStyleEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {fontColorPicker,fontFamilyPicker,fontStylePicker,fontSizePicker} = this.refs;
        return {
            fontColor:fontColorPicker.getValue(),
            fontFamily:fontFamilyPicker.getValue(),
            fontStyleArray:fontStylePicker.getValue(),
            fontSize:fontSizePicker.getValue()
        };
    }

    render(){
        const {style} = this.props.data;
        console.log(style);
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <StyleEditorItemPicker ref="fontColorPicker" type={editorColorPicker} title="文字颜色" data={{color:style.fontColor}}/>
                <div style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <StyleEditorItemPicker ref="fontFamilyPicker" type={editorDropBoxPicker} title="文字字体" data={{groupData:fontFamilyList,selectedValue:style.fontFamily}}/>
                    <StyleEditorItemPicker ref="fontStylePicker" type={editorCheckBoxPicker} title="文字样式" data={{valueArray:fontStyleArray,selectedArray:style.fontStyleArray}}/>
                </div>
                <div style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <StyleEditorItemPicker ref="fontSizePicker" type={editorNumberPicker} title="文字大小" data={{size:style.fontSize}}/>
                </div>
            </div>
        )
    }
}

// width: 300px;
// display: flex;
// flex-direction: row;
// justify-content: space-around;