/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../stylePickerItems/styleColorPicker'
import NumberPicker from '../stylePickerItems/styleNumberPicker'
import DropBoxPicker from '../stylePickerItems/styleDropBoxPicker'
import TextPicker from '../stylePickerItems/styleTextPicker'
import {fontFamilyList} from '../../const'
import {stringifyRGBAObj} from '../../utils/data-helper'

export default class TextStyleEditor extends Component{
    constructor(){
        super();
        this.formStyle = {};
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.posInfo;
        const {textPicker,colorPicker,numberPicker,dropBoxPicker} = this.refs;
        let cStyle = {};
        if(JSON.stringify(colorPicker.getValue()) != JSON.stringify(style.color)){
            cStyle.color = colorPicker.getValue();
        }
        if(numberPicker.getValue() != style.fontSize){
            cStyle.fontSize = numberPicker.getValue();
        }

        if(dropBoxPicker.getValue() != style.fontFamily){
            cStyle.fontFamily = dropBoxPicker.getValue();
        }
        onConfirm(cStyle,textPicker.getValue(),item);
        onClose();
    }

    onCancelClick(){
        const {onConfirm,item,onClose} = this.props.posInfo;
        onClose();
    }

    render(){
        const {formStyle,subName,confirm} = this.props;
        let formStyleItem = {};
        const {posInfo} = this.props;
        let cStyle = posInfo.style;
        let textValue = posInfo.textValue;
        return(
            <div className="true-form-tool-bar-style-editor-container" style={{marginTop:posInfo.pageY,marginLeft:posInfo.pageX}}>
                <div className="true-form-tool-bar-style-editor-header">
                    <div className="true-form-tool-bar-style-editor-text">{'设置文本样式'}</div>
                </div>
                <TextPicker ref='textPicker' text={textValue} title="设置内容"/>
                <ColorPicker ref='colorPicker' color={cStyle ? cStyle.color : null} title="文字颜色"/>
                <NumberPicker ref='numberPicker' size={cStyle ? cStyle.fontSize : null} title="文字大小" unit="(单位:px)"/>
                <DropBoxPicker ref="dropBoxPicker" selectedValue={cStyle ? cStyle.fontFamily:null} title="文字字体" groupData={fontFamilyList}/>

                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="true-form-tool-bar-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div style={{marginTop:'-30px',marginLeft:'80px'}} onClick={()=>{this.onCancelClick()}} className="true-form-tool-bar-style-editor-cancel-btn">{'取消'}</div>
                </div>
            </div>
        )
    }
}