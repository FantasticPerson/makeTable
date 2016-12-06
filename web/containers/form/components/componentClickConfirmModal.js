/**
 * Created by wdd on 2016/12/6.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../../components/BaseModal'

export default class ComponentClickConfirmModal extends Component{
    constructor(){
        super();
    }

    render(){
        const {cb} = this.props.data;
        return (
            <BaseModal bgClassName="adc-base-modal-background">
                <div className="abc-form-component-click-confirm-modal">
                    <div className="abc-form-component-click-confirm-modal-component" onClick={()=>{cb(2)}}>{'选择当前组件元素'}</div>
                    <div className="abc-form-component-click-confirm-modal-td" onClick={()=>{cb(1)}}>{'选择当前td元素'}</div>
                </div>
            </BaseModal>
        )
    }
}