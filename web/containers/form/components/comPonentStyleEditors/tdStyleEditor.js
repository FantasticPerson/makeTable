/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../stylePickerItems/styleColorPicker'
import NumberPicker from '../stylePickerItems/styleNumberPicker'
import DropBoxPicker from '../stylePickerItems/styleDropBoxPicker'
import TextPicker from '../stylePickerItems/styleTextPicker'
import NumberSetter from '../stylePickerItems/styleNumberSetter'
import {fontFamilyList,textAlignPosition} from '../../const'
import {stringifyRGBAObj} from '../../utils/data-helper'

export default class TextStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.posInfo;
        const {textPicker,colorPicker,numberPicker,dropBoxPicker,numberSetter1,numberSetter2,dropBoxPicker2} = this.refs;
        let cStyle = {};
        if(stringifyRGBAObj(colorPicker.getValue()) != stringifyRGBAObj(style.color)){
            cStyle.color = colorPicker.getValue();
        }
        if(numberPicker.getValue() != style.fontSize){
            cStyle.fontSize = numberPicker.getValue();
        }
        if(dropBoxPicker.getValue() != style.fontFamily){
            cStyle.fontFamily = dropBoxPicker.getValue();
        }
        if(!style.textAlign || style.textAlign != dropBoxPicker2.getValue()){
            cStyle.textAlign = dropBoxPicker2.getValue();
        }
        // if((!style.width || style.width && style.width != numberSetter1.getValue()) && numberSetter1.getValue() != ''){
        //     cStyle.width = numberSetter1.getValue();
        // }
        // if((!style.width || style.width && style.width != numberSetter2.getValue()) && numberSetter2.getValue() != ''){
        //     cStyle.height = numberSetter2.getValue();
        // }
        onConfirm(cStyle,textPicker.getValue(),item);
        onClose();
    }

    onCancelClick(){
        const {onClose} = this.props.posInfo;
        onClose();
    }

    render(){
        const {posInfo} = this.props;
        let cStyle = posInfo.style;
        let textValue = posInfo.textValue;
        return(
            <div className="abc-form-component-text-style-editor-container" style={{marginTop:posInfo.pageY,marginLeft:posInfo.pageX}}>
                <div className="abc-form-component-text-style-editor-container-header">
                    <div className="abc-form-component-text-style-editor-text">{'设置文本样式'}</div>
                </div>
                <TextPicker ref='textPicker' text={textValue} title="设置内容"/>
                <ColorPicker ref='colorPicker' color={cStyle ? cStyle.color : null} title="文字颜色"/>
                <NumberPicker ref='numberPicker' size={cStyle ? cStyle.fontSize : null} title="文字大小" unit="(单位:px)"/>
                {/*<NumberSetter ref='numberSetter1' number={cStyle ? cStyle.width : null} title="宽度:" unit="(单位:px)"/>*/}
                {/*<NumberSetter ref='numberSetter2' number={cStyle ? cStyle.height : null} title="高度:" unit="(单位:px)"/>*/}
                <DropBoxPicker ref="dropBoxPicker" selectedValue={cStyle ? cStyle.fontFamily:null} title="文字字体" groupData={fontFamilyList}/>
                <DropBoxPicker ref="dropBoxPicker2" selectedValue={cStyle ? cStyle.textAlign:null} title="子元素布局" groupData={textAlignPosition}/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="abc-form-component-text-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn" onClick={()=>{this.onCancelClick()}}>{'取消'}</div>
                </div>
            </div>
        )
    }
}