/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../../components/BaseModal'
import ContextMenu from './contextMenu'

export default class RightClickMenuModal extends Component{
    constructor(){
        super();
    }

    render() {
        const {cancel} = this.props.data;
        console.log(this.props.data.posInfo);
        return (
            <BaseModal bgClassName="right_click_menu_bg_class_name">
                <div className="right_click_context_menu_container" onClick={()=>{cancel()}}>
                    <ContextMenu {...this.props}/>
                </div>
            </BaseModal>
        )
    }
}