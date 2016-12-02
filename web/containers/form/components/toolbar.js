/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import ToolbarEdit from './toolbar-edit'
import ToolbarStyle from './toolbar-style'

export default class ToolBar extends Component{
    constructor(){
        super();
        this.state = {subTool:[]};
    }

    renderSubTool(){
        const {subTool} = this.state;
        return subTool.map((name,index)=>{
            if(name == 'edit'){
                const {style,clickGenerateTable,dispatch} = this.props;
                return (<ToolbarEdit key={index} dispath={dispatch} clickGenerateTable={clickGenerateTable}/>);
            } else if(name == 'style'){
                const {formStyle,onUpdateStyle,dispatch} = this.props;
                return (<ToolbarStyle key={index} dispatch={dispatch} formStyle={formStyle} onUpdateStyle={onUpdateStyle}/>);
            }
        });
    }

    onBtnClick(name){
        let subTool = this.state.subTool;
        if(subTool.indexOf(name)>=0){
            subTool.splice(subTool.indexOf(name),1);
        } else {
            subTool.push(name);
        }
        this.setState({subTool:subTool});
    }

    render(){
        const {style} = this.props;
        const {subTool} = this.state;
        let styleEdit = subTool.indexOf('edit') >= 0 ? {color1:'#eef6fc',color2:'#6998d6'} : {color1:'#FFFFFF',color2:'#000000'};
        let styleTool = subTool.indexOf('tool') >= 0 ? {color1:'#eef6fc',color2:'#6998d6'} : {color1:'#FFFFFF',color2:'#000000'};
        let styleStyle = subTool.indexOf('style') >= 0 ? {color1:'#eef6fc',color2:'#6998d6'} : {color1:'#FFFFFF',color2:'#000000'};
        return(
            <div>
                <div className="true-form-tool-bar-container" style={style}>
                    <div className="tool-bar-left" style={{marginLeft:'10px',display:'flex'}}>
                        <div className="true-form-edit-edit-container" style={{backgroundColor:styleEdit.color1}} onClick={()=>{this.onBtnClick('edit')}}>
                            <div className="true-form-edit-edit-icon"></div>
                            <div className="true-form-edit-edit-text" style={{color:styleEdit.color2}}>{'编辑'}</div>
                        </div>
                        <div className="true-form-custom-style-icon-container" style={{backgroundColor:styleStyle.color1,marginLeft:'150px'}} onClick={()=>{this.onBtnClick('style')}}>
                            <div className="true-form-custom-style-icon"></div>
                            <div className="true-form-custom-style-text" style={{color:styleStyle.color2}}>{'自定义样式'}</div>
                        </div>
                        <div className="true-form-tool-icon-container" style={{backgroundColor:styleTool.color1,visibility:'hidden'}} onClick={()=>{this.onBtnClick('tool')}}>
                            <div className="true-form-tool-icon"></div>
                            <div className="true-form-tool-text" style={{color:styleTool.color2}}>{'工具'}</div>
                        </div>
                    </div>
                    <div className="tool-bar-right" style={{display:'flex',marginRight:'30px',visibility:'hidden'}}>
                        <div className="true-form-save-icon"></div>
                        <div className="true-form-print-icon" style={{marginLeft:'20px'}}></div>
                        <div className="true-form-question-icon" style={{marginLeft:'20px'}}></div>
                    </div>
                    {this.props.children}
                </div>
                <div className="true-form-sub-tool-bar-container">
                    {this.renderSubTool()}
                </div>
            </div>
        );
    }
}