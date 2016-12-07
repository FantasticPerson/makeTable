/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../stylePickerItems/styleColorPicker'
import NumberPicker from '../stylePickerItems/styleNumberPicker'
import DropBoxPicker from '../stylePickerItems/styleDropBoxPicker'
import NumberSetter from '../stylePickerItems/styleNumberSetter'
import {fontFamilyList} from '../../const'
import {getStyleSet} from '../../utils/data-helper'

export default class TextStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.posInfo;
        const {colorPicker,numberPicker,numberPicker1,numberPicker2,dropBoxPicker,numberSetter1,numberSetter2} = this.refs;
        let cStyle = getStyleSet(style,{
            fontSize:numberPicker.getValue(),
            fontFamily:dropBoxPicker.getValue(),
            marginTop:numberPicker2.getValue(),
            marginLeft:numberPicker1.getValue(),
            width:numberSetter1.getValue(),
            height:numberSetter2.getValue(),
            color:colorPicker.getValue()
        });
        onConfirm(cStyle,item);
        onClose();
    }

    onCancelClick(){
        const {onClose} = this.props.posInfo;
        onClose();
    }

    onDeleteClick(){
        const {onClose,onDelete,tdId,id} = this.props.posInfo;
        onClose();
        onDelete(tdId,id);
    }

    render(){
        const {posInfo} = this.props;
        let cStyle = posInfo.style;
        let marginTop = window.innerHeight < 491 + posInfo.pageY ? (window.innerHeight - 491 > 0 ? window.innerHeight - 491 : 0) : posInfo.pageY;
        let marginLeft = window.innerWidth < 302 + posInfo.pageX ? (window.innerWidth-302>0?window.innerWidth-302:0) : posInfo.pageX;
        return(
            <div className="abc-form-component-text-style-editor-container" style={{marginTop:marginTop,marginLeft:marginLeft}}>
                <div className="abc-form-component-text-style-editor-container-header">
                    <div className="abc-form-component-text-style-editor-text">{'设置文本样式'}</div>
                </div>
                <ColorPicker ref='colorPicker' color={cStyle ? cStyle.color : null} title="文字颜色"/>
                <NumberPicker ref='numberPicker' size={cStyle ? cStyle.fontSize : null} title="文字大小" unit="(单位:px)"/>
                <NumberSetter ref='numberSetter1' number={cStyle ? cStyle.width : null} title="宽度:" unit="(单位:px)"/>
                <NumberSetter ref='numberSetter2' number={cStyle ? cStyle.height : null} title="高度:" unit="(单位:px)"/>
                <NumberPicker ref='numberPicker1' min={-50} size={cStyle ? cStyle.marginLeft : null} title="左间距" unit="(单位:px)"/>
                <NumberPicker ref='numberPicker2' min={-50} size={cStyle ? cStyle.marginTop : null} title="上间距" unit="(单位:px)"/>
                <DropBoxPicker ref="dropBoxPicker" selectedValue={cStyle ? cStyle.fontFamily:null} title="文字字体" groupData={fontFamilyList}/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="abc-form-component-text-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn" onClick={()=>{this.onCancelClick()}}>{'取消'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn" style={{marginLeft:'150px'}} onClick={()=>{this.onDeleteClick()}}>{'删除'}</div>
                </div>
            </div>
        )
    }
}