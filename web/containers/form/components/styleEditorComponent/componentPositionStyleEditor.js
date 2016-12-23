/**
 * Created by wdd on 2016/12/11.
 */
import React,{Component,PropTypes} from 'react'
import StyleEditorItemPicker from './itemPicker/styleEditorItemPicker'
import {editorNumberSetter,editorNumberPicker} from '../../const'

export default class ComponentPositionStyleEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {numberSetter1,numberSetter2,numberPicker1,numberPicker2,numberSetter3,numberSetter4,numberPicker3,numberPicker4} = this.refs;
        let result = {
            width:numberSetter1.getValue(),
            height:numberSetter2.getValue(),
            marginLeft:numberPicker1.getValue(),
            marginTop:numberPicker2.getValue(),
            marginRight:numberPicker3.getValue(),
            marginBottom:numberPicker4.getValue()
        };
        if(numberSetter3 && numberSetter4){
            return {
                ...result,
                width1:numberSetter3.getValue(),
                height1:numberSetter4.getValue()
            }
        }
        return result;
    }

    renderChooseBoxSize(){
        const {width1,height1} = this.props.data.style;
        if(width1 && height1) {
            return (
                <div className="style-component-item-style">
                    <StyleEditorItemPicker ref="numberSetter3" type={editorNumberSetter} title="选择框宽" data={{number: width1}}/>
                    <StyleEditorItemPicker ref="numberSetter4" type={editorNumberSetter} title="选择框高" data={{number: height1}}/>
                </div>
            )
        }
    }

    render(){
        const {style} = this.props.data;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                {this.renderChooseBoxSize()}
                <div className="style-component-item-style">
                    <StyleEditorItemPicker ref="numberSetter1" type={editorNumberSetter} title="宽度" data={{number:style.width ? style.width : null}}/>
                    <StyleEditorItemPicker ref="numberSetter2" type={editorNumberSetter} title="高度" data={{number:style.height ? style.height : null}}/>
                </div>
                <div className="style-component-item-style">
                    <StyleEditorItemPicker ref="numberPicker1" type={editorNumberPicker} title="左间距" data={{size:style.marginLeft ? style.marginLeft : null}}/>
                    <StyleEditorItemPicker ref="numberPicker2" type={editorNumberPicker} title="上间距" data={{size:style.marginTop ? style.marginTop : null}}/>
                </div>
                <div className="style-component-item-style">
                    <StyleEditorItemPicker ref="numberPicker3" type={editorNumberPicker} title="右间距" data={{size:style.marginRight ? style.marginRight : null}}/>
                    <StyleEditorItemPicker ref="numberPicker4" type={editorNumberPicker} title="下间距" data={{size:style.marginBottom ? style.marginBottom : null}}/>
                </div>
            </div>
        )
    }
}