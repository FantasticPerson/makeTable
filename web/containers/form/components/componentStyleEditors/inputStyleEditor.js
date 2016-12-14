/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleSet} from '../../utils/data-helper'
import FontStyleEditor from '../styleEditorComponent/fontStyleEditor'
import ComponentPositionStyleEditor from '../styleEditorComponent/componentPositionStyleEditor'
import ItemInfoEditor from '../styleEditorComponent/itemInfoEditor'

export default class TextStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.data;
        const {fontStylePicker,componentStylePicker,itemInfoEditor} = this.refs;
        let cStyle = getStyleSet(style,{
            ...fontStylePicker.getValue(),
            ...componentStylePicker.getValue()
        });
        onConfirm(cStyle,item,itemInfoEditor.getValue());
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

    render(){
        const {style,pageX,pageY,propName,propId} = this.props.data;
        let marginTop = window.innerHeight < 319 + pageY ? (window.innerHeight - 319 > 0 ? window.innerHeight - 319 : 0) : pageY;
        let marginLeft = window.innerWidth < 456 + pageX ? (window.innerWidth-456>0?window.innerWidth-456:0) : pageX;
        return(
            <div  className="abc-style-bg" style={{
                width: '452px',
                height: '315px',
                marginTop:marginTop,
                marginLeft:marginLeft
            }}>
                <div className="abc-form-component-text-style-editor-container-header">
                    <div className="abc-form-component-text-style-editor-text">{'设置文本样式'}</div>
                </div>
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