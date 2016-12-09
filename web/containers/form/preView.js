/**
 * Created by wdd on 2016/12/7.
 */
import React,{Component,PropTypes} from 'react'
import BaseModal from '../../components/BaseModal'
import {removeOverLayByName} from '../../actions/view'
import * as OverLayNames from '../../constants/OverLayNames'

export default class Preview extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        let showTableNode = document.getElementsByClassName('to-show-table')[0];
        let tableNode = document.getElementsByTagName('table')[0];

        if(tableNode) {
            showTableNode.appendChild(tableNode.cloneNode(true));
        } else {
            this.props.data.dispatch(removeOverLayByName(OverLayNames.PREVIEW));
        }
    }

    render(){
        // let tableNode = document.getElementsByTagName('table')[0];
        // console.log(tableNode);
        // console.log(tableNode.toString());
        return(
            <BaseModal>
                {/*<div className="abc-base-modal-container-bg-radius"></div>*/}
                <div className="abc-base-modal-container-bg-radius" style={{

                }}>
                    <div style={{cursor:'pointer'}} onClick={()=>{
                        this.props.data.dispatch(removeOverLayByName(OverLayNames.PREVIEW));
                    }}>关闭</div>
                    <div className="to-show-table" style={{
                        overflow: 'auto',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>

                    </div>
                </div>
            </BaseModal>
        )
    }
}