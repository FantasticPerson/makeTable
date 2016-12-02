/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../../components/BaseModal'
import ComponentStyleEditor from './component-style-editor'
import TextStyleEditor from './comPonentStyleEditors/textStyleEditor'
import * as overLayNames from '../../../constants/OverLayNames'
import {removeOverLayByName} from '../../../actions/view'

export default class ComponentRightClickModal extends Component{
    constructor(){
        super();
    }

    onCloseModal(){
        this.props.dispatch(removeOverLayByName(overLayNames.COMPONENT_STYLE_EDITOR))
    }

    renderComponentEditor(){
        const {data,cancel,confirm} = this.props.data;
        if(data.type == 'text'){
            return   <TextStyleEditor posInfo={{onClose:this.onCloseModal.bind(this),type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY,style:data.style,textValue:data.value,onConfirm:data.onConfirm,item:data.cTarget}} />
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
                    {/*<TextStyleEditor posInfo={{onClose:this.onCloseModal.bind(this),type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY,style:data.style,textValue:data.value,onConfirm:data.onConfirm,item:data.cTarget}} />*/}
                    {/*<ComponentStyleEditor posInfo={{type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY}} confirm={confirm} cancel={cancel}/>*/}
                </div>
            </BaseModal>
        )
    }
}