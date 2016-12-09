/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../stylePickerItems/styleColorPicker'
import NumberPicker from '../stylePickerItems/styleNumberPicker'
import DropBoxPicker from '../stylePickerItems/styleDropBoxPicker'
import TextPicker from '../stylePickerItems/styleTextPicker'
import NumberSetter from '../stylePickerItems/styleNumberSetter'
import CheckBoxPicker from '../stylePickerItems/styleCheckBoxArrayPicker'
import CheckBoxPicker1 from '../stylePickerItems/styleCheckBoxPicker'
import {fontFamilyList,textAlignPosition,showBorderArray,fontStyleArray} from '../../const'
import {getStyleSet} from '../../utils/data-helper'

export default class TextStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {onConfirm,item,onClose,style} = this.props.posInfo;
        const {textPicker,colorPicker,numberPicker,dropBoxPicker,dropBoxPicker2,checkBoxPicker2,checkBoxPicker3,numberSetter1,numberSetter2,checkBoxPicker} = this.refs;
        let cStyle = getStyleSet(style,{
            color:colorPicker.getValue(),
            fontSize:numberPicker.getValue(),
            fontFamily:dropBoxPicker.getValue(),
            textAlign:dropBoxPicker2.getValue(),
            width:numberSetter1.getValue(),
            height:numberSetter2.getValue()
        });
        if(checkBoxPicker2) {
            cStyle.showBorder = checkBoxPicker2.getValue();
        }
        cStyle.fontStyleArray = checkBoxPicker3.getValue();
        let value = textPicker ? textPicker.getValue() : '';
        onConfirm(cStyle,value,item);
        onClose();
    }

    renderTextPicker(){
        // const {item} = this.props.posInfo;
        // if(item.nodeData){
            let textValue = this.props.posInfo.textValue;
            return (
                <TextPicker ref='textPicker' text={textValue} title="设置内容"/>
            );
        // }
    }

    renderCheckBoxBorder(){
        const {item} = this.props.posInfo;
        if(!item.nodeData){
            const {posInfo} = this.props;
            let cStyle = posInfo.style;
            return(
                <CheckBoxPicker title='显示边框' ref="checkBoxPicker2" dataArray={showBorderArray} selectedArray={cStyle ? cStyle.showBorder : []}/>
            )
        }
    }

    onCancelClick(){
        const {onClose} = this.props.posInfo;
        onClose();
    }

    render(){
        const {posInfo} = this.props;
        let cStyle = posInfo.style;
        let height22 = posInfo.item.nodeData ? 516 : 556;
        let textValue = posInfo.textValue;
        let marginTop = window.innerHeight < height22 + posInfo.pageY ? (window.innerHeight - height22 > 0 ? window.innerHeight - height22 : 0) : posInfo.pageY;
        let marginLeft = window.innerWidth < 302 + posInfo.pageX ? (window.innerWidth-302>0?window.innerWidth-302:0) : posInfo.pageX;

        return(
            <div className="abc-form-component-text-style-editor-container" style={{marginTop:marginTop,marginLeft:marginLeft}}>
                <div className="abc-form-component-text-style-editor-container-header">
                    <div className="abc-form-component-text-style-editor-text">{'设置文本样式'}</div>
                </div>
                {this.renderTextPicker()}
                {this.renderCheckBoxBorder()}
                {/*<CheckBoxPicker title='显示边框' ref="checkBoxPicker2" dataArray={showBorderArray} selectedArray={cStyle ? cStyle.showBorder : []}/>*/}
                <ColorPicker ref='colorPicker' color={cStyle ? cStyle.color : null} title="文字颜色"/>
                <CheckBoxPicker title='字体样式' ref="checkBoxPicker3" dataArray={fontStyleArray} selectedArray={cStyle ? cStyle.fontStyleArray : []}/>
                {/*<CheckBoxPicker1 ref='checkBoxPicker' value={(cStyle && cStyle.fontWeight) ? cStyle.fontWeight == 'bold' : false} title="字体加粗"/>*/}
                <NumberPicker ref='numberPicker' size={cStyle ? cStyle.fontSize : null} title="文字大小" unit="(单位:px)"/>
                <NumberSetter ref='numberSetter1' number={cStyle ? cStyle.width : null} title="宽度:" unit="(单位:px)"/>
                <NumberSetter ref='numberSetter2' number={cStyle ? cStyle.height : null} title="高度:" unit="(单位:px)"/>
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