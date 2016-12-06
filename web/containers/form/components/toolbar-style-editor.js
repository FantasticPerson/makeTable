/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import StyleColorPicker from './stylePickerItems/styleColorPicker'
import StyleNumberPicker from './stylePickerItems/styleNumberPicker'
import StyleDropBoxPicker from './stylePickerItems/styleDropBoxPicker'
import {updateStyleList,updateMaxId} from '../../../actions/form'
import {fontFamilyList} from '../const'

export default class ToolbarStyleEditor extends Component{
    constructor(){
        super();
        this.formStyle = {};
    }

    onConformClick(){
        const {formStyle,onUpdateStyle,subName,onClickClose} = this.props;
        const {colorPicker,colorPicker2,numberPicker1,numberPicker2,dropBoxSelector} = this.refs;
        let arr = [];
        if(subName == 'viewAdd'){
            let style = {};
            style.name = this.formStyle.name;
            style.id = this.formStyle.id;
            style.borderColor = colorPicker.getValue();
            style.fontSize = numberPicker2.getValue();
            style.isDefault = this.formStyle.isDefault;
            style.borderSize = numberPicker1.getValue();
            style.fontColor = colorPicker2.getValue();
            style.fontFamily = dropBoxSelector.getValue();
            for(let i=0;i<formStyle.list.length;i++){
                arr.push(formStyle.list[i]);
            }
            arr.push(style);
            this.props.dispatch(updateMaxId(style.id))
        } else {
            for (let i = 0; i < formStyle.list.length; i++) {
                if (formStyle.list[i].id == formStyle.id) {
                    let style = {id: formStyle.list[i].id};
                    style.borderColor = colorPicker.getValue();
                    style.fontSize = numberPicker2.getValue();
                    style.borderSize = numberPicker1.getValue();
                    style.isDefault = formStyle.list[i].isDefault;
                    style.name = formStyle.list[i].name;
                    style.fontColor = colorPicker2.getValue();
                    style.fontFamily = dropBoxSelector.getValue();
                    arr.push(style);
                } else {
                    arr.push(formStyle.list[i]);
                }
            }
        }
        this.props.dispatch(updateStyleList(arr));
        onClickClose();
        setTimeout(function(){
            onUpdateStyle();
        }.bind(this),20);
    }

    onCancelClick(){
        const {onClickClose} = this.props;
        onClickClose();
    }

    render(){
        const {formStyle,subName} = this.props;
        let formStyleItem = {};
        if(subName == 'viewAdd'){
            let defaultStyle = formStyle.list.find(function(item){
                return item.isDefault;
            });
            formStyleItem.borderColor = defaultStyle.borderColor;
            formStyleItem.fontColor = defaultStyle.fontColor;
            formStyleItem.borderSize = defaultStyle.borderSize;
            formStyleItem.fontSize = defaultStyle.fontSize;
            formStyleItem.name = defaultStyle.name;
            formStyleItem.isDefault = false;
            formStyleItem.id = (formStyle.maxId+1);
            this.formStyle = formStyleItem;
        } else {
            formStyleItem = formStyle.list.find(function (item) {
                return item.id == formStyle.id;
            });
        }

        let title = (subName == 'viewAdd' ? '添加样式' : '样式详情');
        return(
            <div className="abc-form-tool-bar-style-editor-container">
                <div className="abc-form-tool-bar-style-editor-container-header">
                    <div className="abc-form-tool-bar-style-editor-container-header-text">{title}</div>
                </div>
                <StyleColorPicker ref='colorPicker' title="边框颜色" color={(formStyleItem ? formStyleItem.borderColor : null)}/>
                <StyleNumberPicker ref='numberPicker1' title="边框粗细" size={(formStyleItem?formStyleItem.borderSize:null)} unit="(单位:px)"/>
                <StyleColorPicker ref='colorPicker2' title="文字颜色" color={(formStyleItem ? formStyleItem.fontColor : null)}/>
                <StyleNumberPicker ref='numberPicker2' title="字体大小" size={(formStyleItem?formStyleItem.fontSize:null)} unit="(单位:px)"/>
                <StyleDropBoxPicker ref='dropBoxSelector' title="字体选择" selectedValue={(formStyleItem?formStyleItem.fontFamily:null)} groupData={fontFamilyList}/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="abc-form-tool-bar-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div className="abc-form-tool-bar-style-editor-cancel-btn" onClick={()=>{this.onCancelClick()}}>{'取消'}</div>
                </div>
            </div>
        )
    }
}