/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../../components/BaseModal'
import * as overLayNames from '../../../constants/OverLayNames'
import {removeOverLayByName} from '../../../actions/view'
import TdStyleEditor from './componentStyleEditors/tdStyleEditor'
import InputStyleEditor from './componentStyleEditors/inputStyleEditor'
import DropBoxStyleEditor from './componentStyleEditors/dropBoxStyleEditor'
import CheckBoxStyleEditor from './componentStyleEditors/checkBoxStyleEditor'
import {componentText,componentTextArea,componentInput,componentDropBox,componentTd,componentRadioBox,componentCheckBox} from '../const'

export default class ComponentRightClickModal extends Component{
    constructor(){
        super();
    }

    onCloseModal(){
        this.props.dispatch(removeOverLayByName(overLayNames.COMPONENT_STYLE_EDITOR))
    }

    renderComponentEditor(){
        const {data} = this.props.data;
        let transferData = {
            id:data.id,
            type:data.type,
            tdId:data.tdId,
            pageX:data.pageX,
            pageY:data.pageY,
            style:data.style,
            item:data.cTarget,
            propName:data.propName,
            propId:data.propId,
            propZname:data.propZname,
            onClose:this.onCloseModal.bind(this),
            onConfirm:data.onConfirm,
            textValue:data.value,
            valueIndex:data.valueIndex
        };
        if(data.type == componentText || data.type == componentInput || data.type == componentTextArea){
            return <InputStyleEditor data={{onDelete:data.onDelete,...transferData}}/>
        } else if(data.type == componentDropBox){
            return <DropBoxStyleEditor data={{onDelete:data.onDelete,...transferData}}/>
        } else if(data.type == componentTd){
            return <TdStyleEditor data={transferData}/>
        } else if(data.type == componentCheckBox || data.type == componentRadioBox){
            return <CheckBoxStyleEditor data={{onDelete:data.onDelete,...transferData}}/>
        }
    }

    render(){
        const {data,cancel,confirm} = this.props.data;
        return(
            <BaseModal bgClassName="right_click_menu_bg_class_name">
                <div className="right_click_context_menu_container" onClick={(e)=>{
                    if(e.target.className.indexOf("right_click_context_menu_container") >= 0) {
                        cancel()
                    }
                }}>
                    {this.renderComponentEditor()}
                </div>
            </BaseModal>
        )
    }
}