/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleSet} from '../../utils/data-helper'
import FontStyleEditor from '../styleEditorComponent/fontStyleEditor'
import ComponentPositionStyleEditor from '../styleEditorComponent/componentPositionStyleEditor'
import ItemInfoEditor from '../styleEditorComponent/itemInfoEditor'
import {componentText} from '../../const'
import TextSetEditor from '../styleEditorComponent/textSetEditor'

export default class TextStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.data;
        const {fontStylePicker,componentStylePicker,itemInfoEditor,textPicker2} = this.refs;
        let cStyle = getStyleSet(style,{
            ...fontStylePicker.getValue(),
            ...componentStylePicker.getValue(),
        });
        onConfirm(cStyle,item,itemInfoEditor.getValue(),(textPicker2 ? textPicker2.getValue() : ''));
        onClose();
    }

    onCancelClick(){
        const {onClose} = this.props.data;
        onClose();
    }

    onDeleteClick(){
        const {onClose,onDelete,tdId,id} = this.props.data;
        onClose();
        onDelete(tdId,id);
    }

    renderTextSelector(){
        const {type,textValue} = this.props.data;
        if(type == componentText){
            return (
                <TextSetEditor ref="textPicker2" data={{text:textValue,title:''}}/>
            )
        }
    }

    render(){
        const {style,pageX,pageY,propName,propId,type} = this.props.data;
        let height = type == componentText ? 364 : 319;
        let marginTop = window.innerHeight < height + pageY ? (window.innerHeight - height > 0 ? window.innerHeight - height : 0) : pageY;
        let marginLeft = window.innerWidth < 456 + pageX ? (window.innerWidth-456>0?window.innerWidth-456:0) : pageX;
        return(
            <div  className="abc-style-bg" style={{
                width: '452px',
                height: (height-4)+'px',
                marginTop:marginTop,
                marginLeft:marginLeft
            }}>
                <div className="abc-form-component-text-style-editor-container-header">
                    <div className="abc-form-component-text-style-editor-text">{'设置文本样式'}</div>
                </div>
                {this.renderTextSelector()}
                <ItemInfoEditor ref="itemInfoEditor" data={{propName,propId}}/>
                <ComponentPositionStyleEditor ref="componentStylePicker" data={{style:style}}/>
                <FontStyleEditor ref="fontStylePicker" data={{style:style}}/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="abc-form-component-text-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn" onClick={()=>{this.onCancelClick()}}>{'取消'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn" style={{marginLeft:'110px'}} onClick={()=>{this.onDeleteClick()}}>{'删除'}</div>
                </div>
            </div>
        )
    }
}