/**
 * Created by wdd on 2016/12/10.
 */
import React,{Component,PropTypes} from 'react'
import StyleEditorItemPicker from './itemPicker/styleEditorItemPicker'
import {fontStyleArray, fontFamilyList, editorCheckBoxPicker, editorDropBoxPicker, editorColorPicker, editorNumberPicker} from '../../const'

export default class FontStyleEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {fontColorPicker,fontFamilyPicker,fontStylePicker,fontSizePicker} = this.refs;
        return {
            color:fontColorPicker.getValue(),
            fontFamily:fontFamilyPicker.getValue(),
            fontStyleArray:fontStylePicker.getValue(),
            fontSize:fontSizePicker.getValue()
        };
    }

    render(){
        const {style} = this.props.data;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div className="style-component-item-style">
                    <StyleEditorItemPicker ref="fontFamilyPicker" type={editorDropBoxPicker} title="文字字体" data={{groupData:fontFamilyList,selectedValue:style.fontFamily}}/>
                    <StyleEditorItemPicker ref="fontSizePicker" type={editorNumberPicker} title="文字大小" data={{size:style.fontSize}}/>
                    <StyleEditorItemPicker ref="fontStylePicker" type={editorCheckBoxPicker} title="文字样式" data={{valueArray:fontStyleArray,selectedArray:style.fontStyleArray}}/>
                </div>
                <div className="style-component-item-style">
                <StyleEditorItemPicker ref="fontColorPicker" type={editorColorPicker} title="文字颜色" data={{color:style.color}}/>
                </div>
            </div>
        )
    }
}
