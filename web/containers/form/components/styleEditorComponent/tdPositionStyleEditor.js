/**
 * Created by wdd on 2016/12/11.
 */
import React,{Component,PropTypes} from 'react'
import {editorNumberSetter, editorDropBoxPicker,textAlignPosition,verticalAlignPosition} from '../../const'
import StyleEditorItem from './itemPicker/styleEditorItemPicker'

export default class TdPositionStyleEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {numberSetter1,numberSetter2,numberSetter5,numberSetter4,dropBoxPicker,numberSetter3,dropBoxPicker1} = this.refs;
        let value = {
            width:numberSetter1.getValue(),
            height:numberSetter2.getValue(),
            width1:numberSetter4.getValue(),
            height1:numberSetter5.getValue(),
            textAlign:dropBoxPicker.getValue(),
            verticalAlign:dropBoxPicker1.getValue()
        };
        if(numberSetter3){
            value.valueIndex = numberSetter3.getValue()
        }
        return value;
    }

    renderTextIndex(){
        const {style,showPickIndex,valueIndex} = this.props.data;
        if(showPickIndex) {
            console.log('valueIndex',valueIndex);
            return (
                <div className="style-component-item-style">
                    <StyleEditorItem ref="numberSetter3" type={editorNumberSetter} title="文字位置"
                                     data={{number: valueIndex}}/>
                </div>
            )
        }
    }

    render(){
        const {style} = this.props.data;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div className="style-component-item-style">
                    <StyleEditorItem ref="numberSetter1" type={editorNumberSetter} title="宽度" data={{number:style.width ? style.width : null}}/>
                    <StyleEditorItem ref="numberSetter2" type={editorNumberSetter} title="高度" data={{number:style.height ? style.height : null}}/>
                </div>
                <div className="style-component-item-style">
                    <StyleEditorItem ref="numberSetter4" type={editorNumberSetter} title="整列宽度" data={{number:null}}/>
                    <StyleEditorItem ref="numberSetter5" type={editorNumberSetter} title="整行高度" data={{number:null}}/>

                </div>
                <div className="style-component-item-style">
                    <StyleEditorItem ref="dropBoxPicker" type={editorDropBoxPicker} title="水平布局" data={{groupData:textAlignPosition,selectedValue:style.textAlign}}/>
                    <StyleEditorItem ref="dropBoxPicker1" type={editorDropBoxPicker} title="垂直布局" data={{groupData:verticalAlignPosition,selectedValue:style.verticalAlign}}/>
                </div>
                {this.renderTextIndex()}
            </div>
        )
    }
}