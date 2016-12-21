/**
 * Created by wdd on 2016/12/10.
 */
import React,{Component,PropTypes} from 'react'
import {editorTextPicker,editorTextAreaPicker} from '../../const'
import StyleEditorItemPicker from './itemPicker/styleEditorItemPicker'

export default class TextAreaSetEditor extends Component{
    constructor(){
        super();
    }

    getValue() {
        const {textPicker} = this.refs;
        return textPicker.getValue();
    }

    render(){
        const {data} = this.props;
        let defaultText = data ? (data.text ? data.text : '') : '';
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div className="style-component-item-style">
                    <StyleEditorItemPicker ref="textPicker" type={editorTextAreaPicker} title="内容编辑" data={{text:defaultText}}/>
                </div>
            </div>
        )
    }
}