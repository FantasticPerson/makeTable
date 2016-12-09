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
        this.state = {subTool:[]};
    }

    renderSubTool(){
        const {subTool} = this.state;
        return subTool.map((name,index)=>{
            if(name == toolEdit){
                const {generateTable,dispatch} = this.props.data;
                let toolbarEditData = {dispatch,generateTable};
                return (<ToolbarEdit key={index} data={toolbarEditData}/>);
            } else if(name == toolStyle){
                const {formStyle,afterUpdateStyle,dispatch} = this.props.data;
                return (<ToolbarStyle key={index} dispatch={dispatch} formStyle={formStyle} afterUpdateStyle={afterUpdateStyle}/>);
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
        const {style,exportData} = this.props.data;
        const {subTool} = this.state;
        let styleArray = [{color1:'#eef6fc',color2:'#6998d6'},{color1:'#FFFFFF',color2:'#000000'}];
        return(
            <div>
                <div className="abc-form-tool-bar-container" style={style}>
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
                             style={{backgroundColor:styleArray[subTool.indexOf(toolStyle)>=0 ? 0 : 1].color1,marginLeft:'150px'}}
                             onClick={()=>{this.onToolClick(toolStyle)}}>
                            <div className="true-form-custom-style-icon"></div>
                            <div className="abc-form-tool-bar-container-left-item-text"
                                 style={{color:styleArray[subTool.indexOf(toolStyle)>=0 ? 0 : 1].color2}}>
                                {'自定义样式'}
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
                        <div className="true-form-save-icon" style={{cursor:'pointer'}} onClick={(e)=>{exportData()}}></div>
                        <div className="true-form-print-icon" style={{marginLeft:'20px',cursor:'pointer'}}></div>
                        <div className="true-form-question-icon" style={{marginLeft:'20px',cursor:'pointer'}}></div>
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