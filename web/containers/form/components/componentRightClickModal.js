/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../../components/BaseModal'
import ComponentStyleEditor from './component-style-editor'

export default class ComponentRightClickModal extends Component{
    constructor(){
        super();
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
                    <ComponentStyleEditor posInfo={{type:data.type,id:data.id,tdId:data.tdId,pageX:data.pageX,pageY:data.pageY}} confirm={confirm} cancel={cancel}/>
                </div>
            </BaseModal>
        )
    }
}