/**
 * Created by wdd on 2017/1/13.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../../components/BaseModal'
import StyleItemContextMenu from './styleItemContextMenu'
import {removeOverLayByName} from '../../../actions/view'
import * as OverLayName from '../../../constants/OverLayNames'

export default class StyleClickContextModal extends Component{
    constructor(){
        super();
    }

    render(){
        const {id} = this.props.data;
        return (
            <BaseModal bgClassName="right_click_menu_bg_class_name">
                <div className="right_click_context_menu_container" onClick={()=>{
                    this.props.dispatch(removeOverLayByName(OverLayName.FROM_STYLE_DELETE_MODAL))
                }}>
                    <StyleItemContextMenu {...this.props}/>
                </div>
            </BaseModal>
        )
    }
}