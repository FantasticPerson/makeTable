/**
 * Created by wdd on 2016/12/12.
 */
import React,{Component,PropTypes} from 'react'
import {editorOptionPicker} from '../../const'
import StyleEditorItemPicker from './itemPicker/styleEditorItemPicker'

export default class OptionDataEditor extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {itemPicker} = this.refs;
        return itemPicker.getValue();
    }

    render(){
        const {dataArray} = this.props.data;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div style={{
                    width:'300px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <StyleEditorItemPicker ref="itemPicker" type={editorOptionPicker} title="编辑选项"  data={{dataArray:dataArray}}/>
                </div>
            </div>
        )
    }
}