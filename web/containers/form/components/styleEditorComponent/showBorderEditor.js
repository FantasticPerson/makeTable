/**
 * Created by wdd on 2016/12/10.
 */
import React,{Component,PropTypes} from 'react'
import {editorCheckBoxPicker,showBorderArray} from '../../const'
import StyleEditorItemPicker from './itemPicker/styleEditorItemPicker'

export default class ShowBorderEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {itemPicker} = this.refs;
        return itemPicker.getValue();
    }

    render(){
        const {selectedArray} = this.props.data;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div className="style-component-item-style">
                    <StyleEditorItemPicker ref="itemPicker" type={editorCheckBoxPicker} title="显示边框"  data={{valueArray:showBorderArray,selectedArray:selectedArray ? selectedArray : []}}/>
                </div>
            </div>
        )
    }
}