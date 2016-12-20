/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../../components/BaseModal'
import * as overLayNames from '../../../constants/OverLayNames'
import {removeOverLayByName} from '../../../actions/view'
import InputStyleEditor1 from './comPonentStyleEditors/inputStyleEditor'
import TdStyleEditor1 from './comPonentStyleEditors/tdStyleEditor'
import DropBoxStyleEditor1 from './comPonentStyleEditors/dropBoxStyleEditor'
import {componentText,componentTextArea,componentInput,componentDropBox,componentTd} from '../const'

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
            onClose:this.onCloseModal.bind(this),
            onConfirm:data.onConfirm,
            textValue:data.value
        };
        if(data.type == componentText){
            return <InputStyleEditor1  data={{onDelete:data.onDelete,...transferData}}/>
        } else if(data.type == componentInput){
            return <InputStyleEditor1 data={{onDelete:data.onDelete,...transferData}}/>
        } else if(data.type == componentTextArea){
            return <InputStyleEditor1 data={{onDelete:data.onDelete,...transferData}}/>
        } else if(data.type == componentDropBox){
            return <DropBoxStyleEditor1 data={{onDelete:data.onDelete,...transferData}}/>
        } else if(data.type == componentTd){
            return <TdStyleEditor1 data={transferData}/>
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