/**
 * Created by wdd on 2016/12/2.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleSet,getArrayCopy} from '../../utils/data-helper'
import FontStyleEditor from '../styleEditorComponent/fontStyleEditor'
import ComponentPositionStyleEditor from '../styleEditorComponent/componentPositionStyleEditor'
import OptionDataEditor from '../styleEditorComponent/optionDataEditor'
import ItemInfoEditor from '../styleEditorComponent/itemInfoEditor'

export default class DropBoxStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.data;
        const {optionDataEditor1,fontStyle1,positionEditor,itemInfoEditor} = this.refs;
        let cStyle = getStyleSet(style,{
            ...fontStyle1.getValue(),
            ...positionEditor.getValue(),
            dataArray:optionDataEditor1.getValue()
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
        let marginTop = window.innerHeight < 474 + pageY ? (window.innerHeight - 474 > 0 ? window.innerHeight - 474  : 0) : pageY;
        let marginLeft = window.innerWidth < 456 + pageX ? (window.innerWidth-456>0?window.innerWidth-456:0) : pageX;
        return(
            <div className="abc-style-bg" style={{
                width: '452px',
                height: '470px',
                marginTop:marginTop,
                marginLeft:marginLeft
            }}>
                <div className="abc-form-component-text-style-editor-container-header">
                    <div className="abc-form-component-text-style-editor-text">{'设置文本样式'}</div>
                </div>
                <OptionDataEditor ref="optionDataEditor1" data={{dataArray:getArrayCopy(style.dataArray ? style.dataArray : [])}}/>
                <ItemInfoEditor ref="itemInfoEditor" data={{propName,propId}}/>
                <ComponentPositionStyleEditor ref="positionEditor" data={{style:style}}/>
                <FontStyleEditor ref="fontStyle1" data={{style:style}}/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="abc-form-component-text-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn" onClick={()=>{this.onCancelClick()}}>{'取消'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn"  style={{marginLeft:'110px'}} onClick={()=>{this.onDeleteClick()}}>{'删除'}</div>
                </div>
            </div>
        )
    }
}