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
        e.currentTarget.getElementsByTagName('span')[0].style.display='none';
    }

    onDragEnd(e){
        e.currentTarget.getElementsByTagName('span')[0].style.display='block';
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
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'text')}}
                        onDragEnd={(e)=>{
                            this.onDragEnd(e);
                        }}>
                            <div className="true-for-tool-bar-component-text" style={{marginLeft:'18.5px',marginTop:'13.5px'}}></div>
                            <span>{'纯文本'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'input')}}
                            onDragEnd={e=>{this.onDragEnd(e)}}
                        >
                            <div className="true-form-tool-bar-component-input" style={{marginLeft:'17px',marginTop:'12px'}}></div>
                            <span>{'输入框'}</span>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-component-body-line-2">
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{
                            this.onDragStart(e,'radioBox')
                        }} onDragEnd={
                            e=>{this.onDragEnd(e)}
                        }>
                            <div className="true-form-tool-bar-component-radio" style={{marginLeft:'16px',marginTop:'11px'}}></div>
                            <span>{'单选框'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'checkBox')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-check-box" style={{marginLeft:'17px',marginTop:'12px'}}></div>
                            <span>{'复选框'}</span>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-component-body-line-3">
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'textArea')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-text-area" style={{marginLeft:'15px',marginTop:'14px'}}></div>
                            <span>{'输入区域'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'dropBox')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-drop-down" style={{marginLeft:'17px',marginTop:'12px'}}></div>
                            <span>{'下拉框'}</span>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-component-body-line-3">
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'common-words')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-common-word" style={{marginLeft:'15px',marginTop:'14px'}}></div>
                            <span>{'常用语'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'date')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-canlender" style={{marginLeft:'17px',marginTop:'12px'}}></div>
                            <span>{'日期'}</span>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-component-body-line-3">
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'location')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-location" style={{marginLeft:'15px',marginTop:'14px'}}></div>
                            <span>{'位置'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'picture')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-picture" style={{marginLeft:'17px',marginTop:'12px'}}></div>
                            <span>{'图片'}</span>
                        </div>
                    </div>
                    <div className="true-form-tool-bar-component-body-line-3">
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'audio')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-audio" style={{marginLeft:'15px',marginTop:'14px'}}></div>
                            <span>{'声音'}</span>
                        </div>
                        <div className="true-form-tool-bar-component-outer true-form-tool-tip" draggable="true" onDragStart={(e)=>{this.onDragStart(e,'video')}}
                        onDragEnd={e=>{this.onDragEnd(e)}}>
                            <div className="true-form-tool-bar-component-video" style={{marginLeft:'17px',marginTop:'12px'}}></div>
                            <span>{'视频'}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}