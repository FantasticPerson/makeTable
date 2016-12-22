/**
 * Created by wdd on 2016/12/11.
 */
import React,{Component,PropTypes} from 'react'
import StyleEditorItemPicker from './itemPicker/styleEditorItemPicker'
import {editorNumberSetter} from '../../const'

export default class ItemInfoEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {numberSetter1,numberSetter2} = this.refs;
        return {
            name:numberSetter1.getValue(),
            id:numberSetter2.getValue()
        }
    }

    render(){
        const {propName,propId} = this.props.data;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div className="style-component-item-style">
                    <StyleEditorItemPicker ref="numberSetter1" type={editorNumberSetter} title="name" data={{number:propName,beNumber:false}}/>
                    <StyleEditorItemPicker ref="numberSetter2" type={editorNumberSetter} title="id" data={{number:propId,beNumber:false}}/>
                </div>
            </div>
        )
    }
}