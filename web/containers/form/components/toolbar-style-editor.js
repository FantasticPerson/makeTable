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
        const {formStyle,onUpdateStyle,subName} = this.props;
        const {colorPicker,numberPicker1,numberPicker2} = this.refs;
        let arr = [];
        if(subName == 'viewAdd'){
            let style = {};
            style.name = this.formStyle.name;
            style.id = this.formStyle.id;
            style.borderColor = colorPicker.getValue();
            style.fontSize = numberPicker2.getValue();
            style.isDefault = this.formStyle.isDefault;
            style.borderSize = numberPicker1.getValue();
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
                    arr.push(style);
                } else {
                    arr.push(formStyle.list[i]);
                }
            }
        }
        this.props.dispatch(updateStyleList(arr));
        setTimeout(function(){
            onUpdateStyle();
        }.bind(this),20);
    }

    render(){
        const {formStyle,subName} = this.props;
        let formStyleItem = {};
        if(subName == 'viewAdd'){
            let defaultStyle = formStyle.list.find(function(item){
                return item.isDefault;
            });
            formStyle.borderColor = defaultStyle.borderColor;
            formStyle.borderSize = defaultStyle.borderSize;
            formStyle.fontSize = defaultStyle.fontSize;
            formStyle.name = defaultStyle.name;
            formStyle.isDefault = false;
            formStyle.id = (formStyle.maxId+1);
            this.formStyle = formStyle;
        } else {
            formStyleItem = formStyle.list.find(function (item) {
                return item.id == formStyle.id;
            });
        }

        let title = (subName == 'viewAdd' ? '添加样式' : '样式详情');
        return(
            <div className="true-form-tool-bar-style-editor-container">
                <div className="true-form-tool-bar-style-editor-header">
                    <div className="true-form-tool-bar-style-editor-text">{title}</div>
                </div>
                <StyleColorPicker ref='colorPicker' title="边框颜色" color={(formStyleItem ? formStyleItem.borderColor : null)}/>
                <StyleNumberPicker ref='numberPicker1' title="边框粗细" size={(formStyleItem?formStyleItem.borderSize:null)} unit="(单位:px)"/>
                <StyleNumberPicker ref='numberPicker2' title="字体大小" size={(formStyleItem?formStyleItem.fontSize:null)} unit="(单位:px)"/>
                <StyleDropBoxPicker title="字体选择" groupData={fontFamilyList}/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="true-form-tool-bar-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div style={{marginTop:'-30px',marginLeft:'80px'}} onClick={()=>{}} className="true-form-tool-bar-style-editor-cancel-btn">{'取消'}</div>
                </div>
            </div>
        )
    }
}