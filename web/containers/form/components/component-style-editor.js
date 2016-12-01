/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ColorPicker from '../../../components/colorPicker'
import NumberPicker from '../../../components/number-picker'
import ItemSelector from '../../../components/itemSelector'
import {updateStyleList,updateMaxId} from '../../../actions/form'

export default class ComponentStyleEditor extends Component{
    constructor(){
        super();
        this.formStyle = {};
    }

    onConformClick(){
        const {formStyle,onUpdateStyle,subName,confirm,posInfo} = this.props;
        const {colorPicker,numberPicker1,numberPicker2} = this.refs;
        // let arr = [];
        // if(subName == 'viewAdd'){
        //     let style = {};
        //     style.name = this.formStyle.name;
        //     style.id = this.formStyle.id;
        //     style.borderColor = colorPicker.getColor();
        //     style.fontSize = numberPicker2.getNumber();
        //     style.isDefault = this.formStyle.isDefault;
        //     style.borderSize = numberPicker1.getNumber();
        //     for(let i=0;i<formStyle.list.length;i++){
        //         arr.push(formStyle.list[i]);
        //     }
        //     arr.push(style);
        //     this.props.dispatch(updateMaxId(style.id))
        // } else {
        //     for (let i = 0; i < formStyle.list.length; i++) {
        //         if (formStyle.list[i].id == formStyle.id) {
        //             let style = {id: formStyle.list[i].id};
        //             style.borderColor = colorPicker.getColor();
        //             style.fontSize = numberPicker2.getNumber();
        //             style.borderSize = numberPicker1.getNumber();
        //             style.isDefault = formStyle.list[i].isDefault;
        //             style.name = formStyle.list[i].name;
        //             arr.push(style);
        //         } else {
        //             arr.push(formStyle.list[i]);
        //         }
        //     }
        // }
        // this.props.dispatch(updateStyleList(arr));
        // setTimeout(function(){
        //     onUpdateStyle();
        // }.bind(this),20);
        confirm(posInfo.tdId,posInfo.id,{});

    }

    render(){
        const {formStyle,subName,confirm} = this.props;
        let formStyleItem = {};

        let arr = [
            {text:'1',value:'1'},{text:'2',value:'2'},{text:'3',value:'3'}
        ];
        let title = (subName == 'viewAdd' ? '添加样式' : '样式详情');
        const {posInfo} = this.props;
        return(
            <div className="true-form-tool-bar-style-editor-container" style={{marginTop:posInfo.pageY,marginLeft:posInfo.pageX}}>
                <div className="true-form-tool-bar-style-editor-header">
                    <div className="true-form-tool-bar-style-editor-text">{title}</div>
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