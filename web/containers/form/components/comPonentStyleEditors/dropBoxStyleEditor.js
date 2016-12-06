/**
 * Created by wdd on 2016/12/2.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../stylePickerItems/styleColorPicker'
import NumberPicker from '../stylePickerItems/styleNumberPicker'
import DropBoxPicker from '../stylePickerItems/styleDropBoxPicker'
import NumberSetter from '../stylePickerItems/styleNumberSetter'
import OptionDataPicker from '../stylePickerItems/styleOptionDataSetPicker'
import {fontFamilyList} from '../../const'
import {getStyleSet,getArrayCopy} from '../../utils/data-helper'

export default class DropBoxStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.posInfo;
        const {numberSetter1,numberSetter2,colorPicker,numberPicker,numberPicker1,numberPicker2,dropBoxPicker,optionDataPicker} = this.refs;
        let cStyle = getStyleSet(style,{
            color:colorPicker.getValue(),
            fontSize:numberPicker.getValue(),
            fontFamily:dropBoxPicker.getValue(),
            marginTop:numberPicker1.getValue(),
            marginLeft:numberPicker2.getValue(),
            width:numberSetter1.getValue(),
            height:numberSetter2.getValue(),
            dataArray:optionDataPicker.getValue()
        });
        console.log(cStyle);
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
        let marginTop = window.innerHeight < 652 + posInfo.pageY ? (window.innerHeight - 652 > 0 ? window.innerHeight - 652 : 0) : posInfo.pageY;
        let marginLeft = window.innerWidth < 302 + posInfo.pageX ? (window.innerWidth-302>0?window.innerWidth-302:0) : posInfo.pageX;
        return(
            <div className="abc-form-component-text-style-editor-container" style={{marginTop:marginTop+'px',marginLeft:marginLeft+'px'}}>
                <div className="abc-form-component-text-style-editor-container-header">
                    <div className="abc-form-component-text-style-editor-text">{'设置文本样式'}</div>
                </div>
                <OptionDataPicker ref='optionDataPicker' dataArray={cStyle ? getArrayCopy(cStyle.dataArray) : null} title="设置选项"/>
                <ColorPicker ref='colorPicker' color={cStyle ? cStyle.color : null} title="文字颜色"/>
                <NumberPicker ref='numberPicker' size={cStyle ? cStyle.fontSize : null} title="文字大小" unit="(单位:px)"/>
                <NumberSetter ref='numberSetter1' number={cStyle ? cStyle.width : null} title="宽度:" unit="(单位:px)"/>
                <NumberSetter ref='numberSetter2' number={cStyle ? cStyle.height : null} title="高度:" unit="(单位:px)"/>
                <NumberPicker ref='numberPicker1' min={0} size={cStyle ? cStyle.marginLeft : null} title="左间距" unit="(单位:px)"/>
                <NumberPicker ref='numberPicker2' min={0} size={cStyle ? cStyle.marginTop : null} title="上间距" unit="(单位:px)"/>
                <DropBoxPicker ref="dropBoxPicker" selectedValue={cStyle ? cStyle.fontFamily:null} title="文字字体" groupData={fontFamilyList}/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="abc-form-component-text-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn" onClick={()=>{this.onCancelClick()}}>{'取消'}</div>
                    <div className="abc-form-component-text-style-editor-cancel-btn"  style={{marginLeft:'150px'}} onClick={()=>{this.onDeleteClick()}}>{'删除'}</div>
                </div>
            </div>
        )
    }
}