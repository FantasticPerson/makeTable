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
        const {numberSetter1,numberSetter2,numberPicker1,numberPicker2} = this.refs;
        return {
            width:numberSetter1.getValue(),
            height:numberSetter2.getValue(),
            marginLeft:numberPicker1.getValue(),
            marginTop:numberPicker2.getValue()
        }
    }

    render(){
        const {style} = this.props.data;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <StyleEditorItemPicker ref="numberSetter1" type={editorNumberSetter} title="宽度" data={{number:style.width ? style.width : null}}/>
                    <StyleEditorItemPicker ref="numberSetter2" type={editorNumberSetter} title="高度" data={{number:style.height ? style.height : null}}/>
                </div>
                <div style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <StyleEditorItemPicker ref="numberPicker1" type={editorNumberPicker} title="左间距" data={{size:style.marginLeft ? style.marginLeft : null}}/>
                    <StyleEditorItemPicker ref="numberPicker2" type={editorNumberPicker} title="上间距" data={{size:style.marginTop ? style.marginTop : null}}/>
                </div>
            </div>
        )
    }
}