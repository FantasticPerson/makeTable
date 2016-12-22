/**
 * Created by wdd on 2016/12/22.
 */
import React,{Component,PropTypes} from 'react';
import BaseModal from '../../../components/BaseModal'
import {removeOverLayByName} from '../../../actions/view'
import * as overLayNames from '../../../constants/OverLayNames'

export default class PromptModal extends BaseModal{
    constructor(){
        super();
    }

    render(){
        const {title,content,cb} = this.props.data;
        console.log(this.props);
        return (
            <BaseModal>
                <div className="abc-prompt-container">
                    <div className="abc-prompt-head">
                        <div className="abc-prompt-head">{title ? title : '点击确认继续操作'}</div>
                    </div>
                    <div className="abc-prompt-content">
                        {content ? content : '点击确认继续操作'}
                    </div>
                    <div className="abc-prompt-btn-container">
                        <div className="abc-prompt-confirm-btn" onClick={()=>{
                            this.props.dispatch(removeOverLayByName(overLayNames.PROMPT_MODAL));
                            if(cb) cb(true);
                        }}>{'确认'}</div>
                        <div className="abc-prompt-cancel-btn" onClick={()=>{
                            this.props.dispatch(removeOverLayByName(overLayNames.PROMPT_MODAL));
                            if(cb) cb(false);
                        }}>{'取消'}</div>
                    </div>
                </div>
            </BaseModal>
        )
    }
}