/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'

export default class ContextMenu extends Component{
    constructor(){
        super();
    }

    render(){
        const {posInfo,merge,split,cancel} = this.props.data;
        console.log(posInfo);
        const {pageX,pageY,deleteTd,id} = posInfo;
        let marginTop = window.innerHeight < 96 + pageY ? (window.innerHeight - 96 > 0 ? window.innerHeight - 96 : 0) : pageY;
        let marginLeft = window.innerWidth < 152 + pageX ? (window.innerWidth-152>0?window.innerWidth-152:0) : pageX;

        return (
            <div className="abc-form-context-menu-container" style={{marginTop:marginTop,marginLeft:marginLeft}}>
                <div className="abc-form-context-menu-merge" onClick={()=>{merge()}}>
                    <div className="abc-form-context-menu-merge-text">{'合并选中的单元格'}</div>
                </div>
                <div className="abc-form-context-menu-split" onClick={()=>{split()}}>
                    <div className="abc-form-context-menu-split-text">{'拆分选中的单元格'}</div>
                </div>
                <div className="abc-form-context-menu-close" onClick={()=>{deleteTd(id,true)}}>
                    <div className="abc-form-context-menu-close-text">{'删除行'}</div>
                </div>
                <div className="abc-form-context-menu-close" onClick={()=>{deleteTd(id,false)}}>
                    <div className="abc-form-context-menu-close-text">{'删除列'}</div>
                </div>
                <div className="abc-form-context-menu-close" onClick={()=>{cancel()}}>
                    <div className="abc-form-context-menu-close-text">{'取消'}</div>
                </div>
            </div>
        )
    }
}