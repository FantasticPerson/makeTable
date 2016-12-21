/**
 * Created by wdd on 2016/12/21.
 */
import React,{Component,PropTypes} from 'react'
import StyleEditorItem from './itemPicker/styleEditorItemPicker'
import {editorColorPicker} from '../../const'

export default class BorderColorEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {colorPicker} = this.refs;
        return {
            borderColor:colorPicker.getValue()
        }
    }

    render(){
        const {style} = this.props.data;
        return (
            <div  style={{backgroundColor:'#FFF'}}>
                <div className="style-component-item-style">
                    <StyleEditorItem ref="colorPicker" type={editorColorPicker} title="边框颜色" data={{color:style.borderColor}}/>
                </div>
            </div>
        )
    }
}