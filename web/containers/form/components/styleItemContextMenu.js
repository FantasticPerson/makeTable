/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {removeOverLayByName} from '../../../actions/view'
import * as OverLayName from '../../../constants/OverLayNames'

export default class ContextMenu extends Component{
    constructor(){
        super();
    }

    render(){
        const {id,pageX,pageY,deleteStyleItem} = this.props.data;
        let marginTop = window.innerHeight < 34 + pageY ? (window.innerHeight - 34 > 0 ? window.innerHeight - 34 : 0) : pageY;
        let marginLeft = window.innerWidth < 104 + pageX ? (window.innerWidth-104>0?window.innerWidth-104:0) : pageX;

        return (
            <div className="abc-form-context-menu-container" style={{
                marginTop:marginTop,marginLeft:marginLeft,
                width: '100px',
                textAlign: 'center',
                height: '30px',
                lineHeight: '30px'
            }}>
                <div className="abc-form-context-menu-merge" onClick={()=>{
                    this.props.dispatch(removeOverLayByName(OverLayName.FROM_STYLE_DELETE_MODAL));
                    deleteStyleItem(id)}}>
                    <div className="abc-form-context-menu-merge-text">{'删除'}</div>
                </div>
            </div>
        )
    }
}