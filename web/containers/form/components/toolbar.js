/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import ToolbarEdit from './toolbar-edit'
import ToolbarStyle from './toolbar-style'
import ToolbarRecover from './toolbar-recover'
import {toolEdit,toolStyle,toolTool} from '../const'

export default class ToolBar extends Component{
    constructor(){
        super();
        this.state = {subTool:[toolEdit]};
    }

    renderSubTool(){
        const {subTool} = this.state;
        return subTool.map((name,index)=>{
            if(name == toolEdit){
                const {generateTable,dispatch,addNewHistory} = this.props.data;
                let toolbarEditData = {dispatch,generateTable};
                return (<ToolbarEdit key={index} data={toolbarEditData}/>);
            } else if(name == toolStyle){
                const {formStyle,afterUpdateStyle,dispatch,addNewHistory} = this.props.data;
                return (<ToolbarStyle key={index} dispatch={dispatch} formStyle={formStyle} afterUpdateStyle={afterUpdateStyle} addNewHistory={addNewHistory}/>);
            } else if(name == toolTool){
                const {formStyle,afterUpdateStyle,dispatch,importData} = this.props.data;
                return (<ToolbarRecover key={index} dispatch={dispatch} importData={importData} onRecoverFinish={this.onRecoverFinish.bind(this)}/>)
            }
        });
    }

    onRecoverFinish(){
        let subTool = this.state.subTool;
        if(subTool.indexOf(toolTool) >= 0){
            subTool.splice(subTool.indexOf(toolTool),1);
        }
    }

    onToolClick(name){
        let subTool = this.state.subTool;
        if(subTool.indexOf(name)>=0){
            subTool.splice(subTool.indexOf(name),1);
        } else {
            subTool.push(name);
        }
        this.setState({subTool:subTool});
    }

    render(){
        const {style,exportData,showModuleView,goBack,saveTempModule,showModuleView2} = this.props.data;
        const {subTool,marginLeft} = this.state;
        let styleArray = [{color1:'#eef6fc',color2:'#6998d6'},{color1:'#FFFFFF',color2:'#000000'}];
        return(
            <div>
                <div className="abc-form-tool-bar-container abc-common-box-shadow" style={{
                    ...style,
                    boxShadow:'-2px 2px 8px 0 rgba(0,0,0,0.4)'
                }}>
                    <div className="abc-form-tool-bar-container-left">
                        <div className="abc-form-tool-bar-container-left-item"
                             style={{backgroundColor:styleArray[subTool.indexOf(toolEdit)>=0 ? 0 : 1].color1}}
                             onClick={()=>{this.onToolClick(toolEdit)}}>
                            <div className="true-form-edit-edit-icon"></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:styleArray[subTool.indexOf(toolEdit)>=0 ? 0 : 1].color2}}>
                                {'编辑'}
                            </div>
                        </div>

                        <div className="abc-form-tool-bar-container-left-item"
                             style={{backgroundColor:styleArray[subTool.indexOf(toolTool)>=0 ? 0 : 1].color1,marginLeft:'150px'}}
                             onClick={()=>{
                                 this.onToolClick(toolTool)
                             }}>
                            <div className="true-form-tool-icon"></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:styleArray[subTool.indexOf(toolTool)>=0 ? 0 : 1].color2}}>
                                {'工具'}
                            </div>
                        </div>
                    </div>
                    <div className="abc-form-tool-bar-container-right">
                        <div className="true-form-save-icon-container" onClick={(e)=>{goBack()}}>
                            <div className="true-form-edit-undo-icon" style={{width:'14px',height:'14px'}} ></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:'#000000'}}>
                                {'撤销'}
                            </div>
                        </div>
                        <div className="true-form-save-icon-container" style={{display:'none'}} onClick={(e)=>{exportData()}}>
                            <div className="true-form-save-icon" style={{width:'14px',height:'14px'}} ></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:'#000000'}}>
                                {'取消撤销'}
                            </div>
                        </div>
                        <div className="true-form-save-icon-container" style={{marginLeft:'20px',display:'none'}} onClick={(e)=>{saveTempModule()}}>
                            <div className="true-form-save-icon" style={{width:'14px',height:'14px'}} ></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:'#000000'}}>
                                {'暂存'}
                            </div>
                        </div>
                        <div className="true-form-save-icon-container" style={{marginLeft:'20px'}} onClick={(e)=>{exportData()}}>
                            <div className="true-form-save-icon" style={{width:'14px',height:'14px'}} ></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:'#000000'}}>
                                {'保存'}
                            </div>
                        </div>
                        <div className="true-form-print-icon" style={{marginLeft:'20px',cursor:'pointer',display:'none'}}></div>
                        <div className="true-form-question-icon" style={{marginLeft:'20px',cursor:'pointer',display:'none'}}></div>
                        <div className="abc-form-tool-bar-container-left-item" style={{
                            width: '50px',
                            marginLeft: '20px',
                            backgroundColor:styleArray[showModuleView2 ? 0 : 1].color1
                        }} onClick={()=>{
                            showModuleView();
                        }}>
                            <div className="true-form-tool-bar-style-style-1" style={{width:'14px',height:'18px'}}></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:styleArray[showModuleView2 ? 0 : 1].color2}}>
                                {'模板'}
                            </div>
                        </div>
                        <div className="abc-form-tool-bar-container-left-item" ref="styleEditor"
                             style={{backgroundColor:styleArray[subTool.indexOf(toolStyle)>=0 ? 0 : 1].color1,marginLeft:'20px'}}
                             onClick={()=>{this.onToolClick(toolStyle)}}>
                            <div className="true-form-custom-style-icon"></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:styleArray[subTool.indexOf(toolStyle)>=0 ? 0 : 1].color2}}>
                                {'自定义样式'}
                            </div>
                        </div>
                    </div>
                    {this.props.children}
                </div>
                <div className="abc-form-tool-bar-sub-tool-container">
                    {this.renderSubTool()}
                </div>
            </div>
        );
    }
}