/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../../../components/colorPicker'
import NumberPicker from '../../../components/number-picker'
import ItemSelector from '../../../components/itemSelector'

import FontStyleEditor from './comPonentStyleEditors/fontStyleEditor'
import BorderStyleEditor from './comPonentStyleEditors/borderStyleEditor'
import TextSetEditor from './comPonentStyleEditors/textSetEditor'

export default class ComponentStyleEditor extends Component{
    constructor(){
        super();
        this.formStyle = {};
    }

    onConformClick(){
        const {formStyle,onUpdateStyle,subName,confirm,posInfo} = this.props;
        const {colorPicker,numberPicker1,numberPicker2} = this.refs;
        confirm(posInfo.tdId,posInfo.id,{});

    }

    render(){
        // const {formStyle,subName,confirm} = this.props;
        // let formStyleItem = {};
        //
        // let arr = [
        //     {text:'1',value:'1'},{text:'2',value:'2'},{text:'3',value:'3'}
        // ];
        // let title = (subName == 'viewAdd' ? '添加样式' : '样式详情');
        // style={{marginTop:posInfo.pageY,marginLeft:posInfo.pageX}}
        // const {posInfo} = this.props;
        return(
            <div>
                <div className="true-form-tool-bar-style-editor-header">
                    <div className="true-form-tool-bar-style-editor-text">{'添加样式'}</div>
                </div>
                <TextSetEditor title="样式名称" data={{text:''}}/>
                <FontStyleEditor/>
                <BorderStyleEditor/>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="true-form-tool-bar-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div style={{marginTop:'-30px',marginLeft:'80px'}} onClick={()=>{}} className="true-form-tool-bar-style-editor-cancel-btn">{'取消'}</div>
                </div>
            </div>
        )
    }
}