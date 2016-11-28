/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'
import ToolBarEditDisplay from './toolbar-edit-display'

export default class ToolBarEdit extends Component{
    constructor(){
        super();
    }

    render(){
        const {} = this.props;
        return (
            <div className="true-form-tool-bar-edit-container">
                <div className="true-form-edit-icon-container">
                    <div className="true-form-edit-element-icon-container">
                        <div className="true-form-edit-element-icon true-form-edit-icon-style"></div>
                        <div className="true-form-edit-icon-style">{'部件'}</div>
                    </div>
                    <div className="true-form-edit-display-icon-container">
                        <div className="true-form-edit-display-icon true-form-edit-icon-style"></div>
                        <div className="true-form-edit-icon-style">{'布局'}</div>
                    </div>
                    <div className="true-form-edit-preview-icon-container">
                        <div className="true-form-edit-preview-icon true-form-edit-icon-style"></div>
                        <div className="true-form-edit-icon-style">{'预览'}</div>
                    </div>
                    <div className="true-form-edit-source-icon-container">
                        <div className="true-form-edit-source-icon true-form-edit-icon-style"></div>
                        <div className="true-form-edit-icon-style">{'查看源代码'}</div>
                    </div>
                </div>
                <div className="true-form-edit-icon-sub-container">
                    <ToolBarEditDisplay/>
                </div>
            </div>
        )
    }
}