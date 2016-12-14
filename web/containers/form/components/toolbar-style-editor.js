/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import FontStyleEditor from './styleEditorComponent/fontStyleEditor'
import BorderStyleEditor from './styleEditorComponent/borderStyleEditor'
import TextSetEditor from './styleEditorComponent/textSetEditor'
import {updateStyleList,updateMaxId} from '../../../actions/form'
import {findItem} from '../utils/data-helper'

export default class ComponentStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {formStyle,onUpdateStyle,subName,onClickClose} = this.props;
        const {namePicker,fontStyleEditor,borderStyleEditor} = this.refs;

        let arr = [];
        if(subName == 'viewAdd'){
            let style = {
                name:namePicker.getValue(),
                ...borderStyleEditor.getValue(),
                ...fontStyleEditor.getValue(),
                isDefault:false,
                id:formStyle.maxId+1
            };
            for(let i=0;i<formStyle.list.length;i++){
                arr.push(formStyle.list[i]);
            }
            arr.push(style);
            this.props.dispatch(updateMaxId(style.id))
        } else {
            for (let i = 0; i < formStyle.list.length; i++) {
                if (formStyle.list[i].id == formStyle.id) {
                    let style = {
                        name:namePicker.getValue(),
                        ...borderStyleEditor.getValue(),
                        ...fontStyleEditor.getValue(),
                        isDefault:formStyle.list[i].isDefault,
                        id:formStyle.id
                    };
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
            formStyleItem = findItem(formStyle.list,'isDefault',true);
        } else {
            formStyleItem = findItem(formStyle.list,'id',formStyle.id);
        }

        let title = (subName == 'viewAdd' ? '添加样式' : '样式详情');
        return(
            <div style={{
                position: 'absolute',
                marginLeft: '175px',
                marginTop: '240px',
                backgroundColor: '#FFF',
                border: '1px solid #eee',
                width: '300px',
                height: '220px',
                webkitBoxShadow: '-1px 1px 4px 0 rgba(0, 0, 0, 0.2)'
            }}>
                <div className="abc-form-tool-bar-style-editor-container-header">
                    <div className="abc-form-tool-bar-style-editor-container-header-text">{title}</div>
                </div>
                <TextSetEditor ref="namePicker" title="样式名称" data={{text:formStyleItem.name}}/>
                <FontStyleEditor ref="fontStyleEditor" data={{style:formStyleItem}}/>
                <BorderStyleEditor ref="borderStyleEditor" data={{style:formStyleItem}}/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="abc-form-tool-bar-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div onClick={()=>{this.onCancelClick()}} className="abc-form-tool-bar-style-editor-cancel-btn">{'取消'}</div>
                </div>
            </div>
        )
    }
}