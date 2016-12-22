/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleSet} from '../../utils/data-helper'
import FontStyleEditor from '../styleEditorComponent/fontStyleEditor'
import TdPositionStyleEditor from '../styleEditorComponent/tdPositionStyleEditor'
import ShowBorderEditor from '../styleEditorComponent/showBorderEditor'
import TextSetEditor from '../styleEditorComponent/textSetEditor'
import ItemInfoEditor from '../styleEditorComponent/itemInfoEditor'

export default class TextStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.data;
        const {textPicker,fontPicker,tdPosPicker,showBorder,itemInfoEditor} = this.refs;
        let resultStyle = {...tdPosPicker.getValue()};
        if(fontPicker){
            resultStyle = {...resultStyle,...fontPicker.getValue()}
        }
        let cStyle = getStyleSet(style,resultStyle);
        if(showBorder) {
            cStyle.showBorder = showBorder.getValue();
        }
        let value = textPicker ? textPicker.getValue() : '';
        onConfirm(cStyle,value,item,itemInfoEditor.getValue());
        onClose();
    }

    renderCheckBoxBorder(){
        const {item} = this.props.data;
        if(!item.nodeData){
            const {style} = this.props.data;
            return(
                <ShowBorderEditor ref="showBorder" data={{selectedArray:style.showBorder}}/>
            )
        }
    }

    onCancelClick(){
        const {onClose} = this.props.data;
        onClose();
    }

    renderTextPicker(){
        const {item,textValue} = this.props.data;
        // if(item.nodeData){
            return (
                <TextSetEditor ref="textPicker" data={{text:textValue,title:''}}/>
            );
        // }
    }

    renderFontStyle(){
        const {item,style} = this.props.data;
        // if(item.nodeData){
            return (
                <FontStyleEditor ref="fontPicker" data={{style:style}}/>
            );
        // }
    }

    render(){
        const {style,textValue,item,pageX,pageY,propName,propId} = this.props.data;//312 357
        let height = item.nodeData ? 265 : 309;
        let marginTop = window.innerHeight < height+4 + pageY ? (window.innerHeight - height -4 > 0 ? window.innerHeight - height -4 : 0) : pageY+4;
        let marginLeft = window.innerWidth < 456 + pageX ? (window.innerWidth-456>0?window.innerWidth-456:0) : pageX;
        return(
            <div className="abc-style-bg" style={{
                width: '452px',
                height: height+'px',
                marginTop:marginTop,
                marginLeft:marginLeft
            }}>
                <div className="abc-form-component-text-style-editor-container-header">
                    <div className="abc-form-component-text-style-editor-text">{'设置文本样式'}</div>
                </div>
                {/*<TextSetEditor ref="textPicker" data={{text:textValue,title:''}}/>*/}
                {this.renderTextPicker()}
                {/*<ItemInfoEditor ref="itemInfoEditor" data={{propName,propId}}/>*/}
                <TdPositionStyleEditor ref="tdPosPicker" data={{style:style}}/>
                {this.renderFontStyle()}
                {/*<FontStyleEditor ref="fontPicker" data={{style:style}}/>*/}
                {this.renderCheckBoxBorder()}
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="abc-form-component-text-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn" onClick={()=>{this.onCancelClick()}}>{'取消'}</div>
                </div>
            </div>
        );
    }
}