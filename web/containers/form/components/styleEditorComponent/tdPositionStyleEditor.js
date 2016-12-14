/**
 * Created by wdd on 2016/12/11.
 */
import React,{Component,PropTypes} from 'react'
import {editorNumberSetter, editorDropBoxPicker,textAlignPosition} from '../../const'
import StyleEditorItem from './itemPicker/styleEditorItemPicker'

export default class TdPositionStyleEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {numberSetter1,numberSetter2,dropBoxPicker} = this.refs;
        return {
            width:numberSetter1.getValue(),
            height:numberSetter2.getValue(),
            textAlign:dropBoxPicker.getValue()
        }
    }

    render(){
        const {style} = this.props.data;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div className="style-component-item-style">
                    <StyleEditorItem ref="numberSetter1" type={editorNumberSetter} title="宽度" data={{number:style.width ? style.width : null}}/>
                    <StyleEditorItem ref="numberSetter2" type={editorNumberSetter} title="高度" data={{number:style.height ? style.height : null}}/>
                    <StyleEditorItem ref="dropBoxPicker" type={editorDropBoxPicker} title="元素布局" data={{groupData:textAlignPosition,selectedValue:style.textAlign}}/>
                </div>
            </div>
        )
    }
}