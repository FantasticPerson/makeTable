/**
 * Created by wdd on 2016/12/11.
 */
import React,{Component,PropTypes} from 'react'
import StyleEditorItemPicker from '../stylePickerItems/styleEditorItemPicker'
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
                <div style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <StyleEditorItemPicker ref="numberSetter1" type={editorNumberSetter} title="name" data={{number:propName}}/>
                    <StyleEditorItemPicker ref="numberSetter2" type={editorNumberSetter} title="id" data={{number:propId}}/>
                </div>
            </div>
        )
    }
}