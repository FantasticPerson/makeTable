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
        return (
            <div className="true-form-context-menu-container" style={{marginTop:posInfo.pageY,marginLeft:posInfo.pageX}}>
                <div className="true-form-context-menu-merge" onClick={()=>{merge()}}>
                    <div className="true-form-context-menu-merge-text">{'合并选中的单元格'}</div>
                </div>
                <div className="true-form-context-menu-split" onClick={()=>{split()}}>
                    <div className="true-form-context-menu-split-text">{'拆分选中的单元格'}</div>
                </div>
                <div className="true-form-context-menu-close" onClick={()=>{cancel()}}>
                    <div className="true-form-context-menu-close-text">{'取消'}</div>
                </div>
            </div>
        )
    }
}