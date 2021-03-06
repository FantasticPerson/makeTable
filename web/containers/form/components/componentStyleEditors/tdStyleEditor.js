/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleSet} from '../../utils/data-helper'
import FontStyleEditor from '../styleEditorComponent/fontStyleEditor'
import TdPositionStyleEditor from '../styleEditorComponent/tdPositionStyleEditor'
import ShowBorderEditor from '../styleEditorComponent/showBorderEditor'
import TextSetEditor from '../styleEditorComponent/textSetEditor'
import TextAreaEditor from '../styleEditorComponent/textAreaEditor'
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
        let values = itemInfoEditor ? itemInfoEditor.getValue() : {};
        if(resultStyle.valueIndex){
            values.valueIndex = resultStyle.valueIndex
        }
        onConfirm(cStyle,value,item,values);
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
        return (
            <TextAreaEditor ref="textPicker" data={{text:textValue,title:''}}/>
        );
    }

    renderFontStyle(){
        const {item,style} = this.props.data;
        return (
            <FontStyleEditor ref="fontPicker" data={{style:style}}/>
        );
    }

    render(){
        const {style,textValue,item,pageX,pageY,propName,propId,valueIndex} = this.props.data;//312 357
        let height = item.nodeData ? 380 : 470;
        let marginTop = window.innerHeight - 40 < height+4 + pageY ? window.innerHeight - 40 - height -4 : pageY+4;
        let marginLeft = window.innerWidth < 456 + pageX ? window.innerWidth-456 : pageX;
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
                <TdPositionStyleEditor ref="tdPosPicker" data={{style:style,valueIndex:valueIndex,showPickIndex:(item.nodeData) ? false : true}}/>
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