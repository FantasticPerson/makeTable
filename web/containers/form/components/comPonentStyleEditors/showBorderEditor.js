/**
 * Created by wdd on 2016/12/10.
 */
import React,{Component,PropTypes} from 'react'
import {editorCheckBoxPicker,showBorderArray} from '../../const'
import StyleEditorItemPicker from '../stylePickerItems/styleEditorItemPicker'

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
                <div style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <StyleEditorItemPicker ref="itemPicker" type={editorCheckBoxPicker} title="文字字体"  data={{valueArray:showBorderArray,selectedArray:selectedArray ? selectedArray : []}}/>
                </div>
            </div>
        )
    }
}