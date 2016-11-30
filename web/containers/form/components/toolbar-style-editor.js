/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../../../components/colorPicker'
import NumberPicker from '../../../components/number-picker'
import ItemSelector from '../../../components/itemSelector'
import {updateStyleList} from '../../../actions/form'

export default class ToolbarStyleEditor extends Component{
    constructor(){
        super();
    }

    onConformClick(){
        const {formStyle,onUpdateStyle} = this.props;
        const {colorPicker,numberPicker1,numberPicker2} = this.refs;
        let arr = [];
        for(let i=0;i<formStyle.list.length;i++){
            if(formStyle.list[i].id == formStyle.id){
                let style={id:formStyle.list[i].id};
                style.borderColor = colorPicker.getColor();
                style.fontSize = numberPicker2.getNumber();
                style.borderSize = numberPicker1.getNumber();
                style.isDefault = formStyle.list[i].isDefault;
                style.name = formStyle.list[i].name;
                arr.push(style);
            } else {
                arr.push(formStyle.list[i]);
            }
        }
        this.props.dispatch(updateStyleList(arr));
        setTimeout(function(){
            onUpdateStyle();
        }.bind(this),20);
    }

    render(){
        const {formStyle} = this.props;
        let formStyleItem = formStyle.list.find(function (item) {
            return item.id == formStyle.id;
        });
        let arr = [
            {text:'1',value:'1'},{text:'2',value:'2'},{text:'3',value:'3'}
        ];
        return(
            <div className="true-form-tool-bar-style-editor-container">
                <div className="true-form-tool-bar-style-editor-header">
                    <div className="true-form-tool-bar-style-editor-text">{'样式详情'}</div>
                </div>
                <div className="true-form-tool-bar-style-editor-color">
                    <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-color-text">{'边框颜色'}</div>
                    <div className="true-form-tool-bar-style-editor-color-container">
                        <ColorPicker ref='colorPicker' color={(formStyleItem ? formStyleItem.borderColor : null)}/>
                    </div>
                </div>
                <div className="true-form-tool-bar-style-editor-border-size">
                    <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-border-size-text">{'边框粗细'}</div>
                    <div className="true-form-tool-bar-style-editor-border-size-container">
                        <NumberPicker ref='numberPicker1' value={(formStyleItem?formStyleItem.borderSize:null)}/>
                    </div>
                    <div style={{marginLeft:'5px',marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-size-unit">{'(单位:px)'}</div>
                </div>
                <div className="true-form-tool-bar-style-editor-font-size">
                    <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-size-text">{'字体大小'}</div>
                    <div className="true-form-tool-bar-style-editor-font-size-container">
                        <NumberPicker ref='numberPicker2' value={(formStyleItem?formStyleItem.fontSize:null)}/>
                    </div>
                    <div style={{marginLeft:'5px',marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-size-unit">{'(单位:px)'}</div>
                </div>
                <div className="true-form-tool-bar-style-editor-font-family">
                    <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-family-text">{'字体选择'}</div>
                    <div className="true-form-tool-bar-style-editor-font-family-container">
                        <ItemSelector optionDataArray ={arr}/>
                    </div>
                </div>
                <div style={{marginTop:'10px',marginBottom:'10px'}}>
                    <div className="true-form-tool-bar-style-editor-confirm-btn" onClick={()=>{this.onConformClick()}}>{'确认'}</div>
                    <div style={{marginTop:'-30px',marginLeft:'80px'}} onClick={()=>{}} className="true-form-tool-bar-style-editor-cancel-btn">{'取消'}</div>
                </div>
            </div>
        )
    }
}