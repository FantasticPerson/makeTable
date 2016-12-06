/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../../components/BaseModal'
import TextStyleEditor from './comPonentStyleEditors/textStyleEditor'
import InputStyleEditor from './comPonentStyleEditors/inputStyleEditor'
import TextAreaStyleEditor from './comPonentStyleEditors/textAreaStyleEditor'
import DropBoxStyleEditor from './comPonentStyleEditors/dropBoxStyleEditor'
import TdStyleEditor from './comPonentStyleEditors/tdStyleEditor'
import * as overLayNames from '../../../constants/OverLayNames'
import {removeOverLayByName} from '../../../actions/view'
import {componentText,componentTextArea,componentInput,componentDropBox,componentTd} from '../const'

export default class ComponentRightClickModal extends Component{
    constructor(){
        super();
    }

    onCloseModal(){
        this.props.dispatch(removeOverLayByName(overLayNames.COMPONENT_STYLE_EDITOR))
    }

    renderComponentEditor(){
        const {data,cancel,confirm} = this.props.data;
        if(data.type == componentText){
            return   <TextStyleEditor posInfo={{onClose:this.onCloseModal.bind(this),type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY,style:data.style,textValue:data.value,onConfirm:data.onConfirm,item:data.cTarget}} />
        } else if(data.type == componentInput){
            return   <InputStyleEditor posInfo={{onClose:this.onCloseModal.bind(this),type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY,style:data.style,textValue:data.value,onConfirm:data.onConfirm,item:data.cTarget}} />
        } else if(data.type == componentTextArea){
            return   <TextAreaStyleEditor posInfo={{onClose:this.onCloseModal.bind(this),type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY,style:data.style,textValue:data.value,onConfirm:data.onConfirm,item:data.cTarget}} />
        } else if(data.type == componentDropBox){
            return   <DropBoxStyleEditor posInfo={{onClose:this.onCloseModal.bind(this),type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY,style:data.style,textValue:data.value,onConfirm:data.onConfirm,item:data.cTarget}} />
        } else if(data.type == componentTd){
            return <TdStyleEditor posInfo={{onClose:this.onCloseModal.bind(this),type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY,style:data.style,textValue:data.value,onConfirm:data.onConfirm,item:data.cTarget}}/>
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