/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'

export default class ComponentPicker extends Component{
    constructor(){
        super();
    }

    onDragStart(e,text){
        e.dataTransfer.setData('text/plain',text);
    }

    render(){
        const {} = this.props;
        return (
            <div className="true-form-tool-bar-component-container">
                <div className="true-form-tool-bar-component-container-header">
                    <div className="true-form-tool-bar-component-container-header-text">{'可拖拽组件'}</div>
                    <div className="true-form-tool-bar-component-hide" style={{cursor:'pointer'}}></div>
                </div>
                <div className="true-form-tool-bar-component-body-container">
                    <div className="true-form-tool-bar-component-body-line-1">
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'text')}}>
                            <div className="true-for-tool-bar-component-text"></div>
                            <span>{'纯文本'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'input')}}>
                            <div className="true-form-tool-bar-component-input"></div>
                            <span>{'输入框'}</span>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-component-body-line-2">
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'radioBox')}}>
                            <div className="true-form-tool-bar-component-radio"></div>
                            <span>{'复选框'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'checkBox')}}>
                            <div className="true-form-tool-bar-component-check-box"></div>
                            <span>{'单选框'}</span>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-component-body-line-3">
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'textArea')}}>
                            <div className="true-form-tool-bar-component-text-area"></div>
                            <span>{'输入区域'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'dropBox')}}>
                            <div className="true-form-tool-bar-component-drop-down"></div>
                            <span>{'下拉框'}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}