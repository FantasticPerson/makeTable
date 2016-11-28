/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import ToolbarEdit from './toolbar-edit'

export default class ToolBar extends Component{
    constructor(){
        super();
        this.state = {subTool:null};
    }

    renderSubTool(){
        const {subTool} = this.state;
        if(subTool == 'edit'){
            return (<ToolbarEdit/>)
        }
    }

    onBtnClick(name){
        const {subTool} = this.state;
        let name2 = (subTool == name ? null : name);
        this.setState({subTool:name2});
    }

    getStyleByName(name){
        const {subTool} = this.state;
        if(name == subTool){
            return {color1:'#eef6fc',color2:'#6998d6'}
        } else {
            return {color1:'#FFFFFF',color2:'#000000'}
        }
    }

    render(){
        const {style} = this.props;
        let styleEdit = this.getStyleByName('edit');
        let styleStyle = this.getStyleByName('style');
        let styleTool = this.getStyleByName('tool');
        return(
            <div>
                <div className="true-form-tool-bar-container" style={style}>
                    <div className="tool-bar-left" style={{marginLeft:'10px',display:'flex'}}>
                        <div className="true-form-edit-edit-container" style={{backgroundColor:styleEdit.color1}} onClick={()=>{this.onBtnClick('edit')}}>
                            <div className="true-form-edit-edit-icon"></div>
                            <div className="true-form-edit-edit-text" style={{color:styleEdit.color2}}>{'编辑'}</div>
                        </div>
                        <div className="true-form-custom-style-icon-container" style={{backgroundColor:styleStyle.color1}} onClick={()=>{this.onBtnClick('style')}}>
                            <div className="true-form-custom-style-icon"></div>
                            <div className="true-form-custom-style-text" style={{color:styleStyle.color2}}>{'自定义样式'}</div>
                        </div>
                        <div className="true-form-tool-icon-container" style={{backgroundColor:styleTool.color1}} onClick={()=>{this.onBtnClick('tool')}}>
                            <div className="true-form-tool-icon"></div>
                            <div className="true-form-tool-text" style={{color:styleTool.color2}}>{'工具'}</div>
                        </div>
                    </div>
                    <div className="tool-bar-right" style={{display:'flex',marginRight:'30px'}}>
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
        // return(
        //     <div className="true-form-tool-bar-container">
        //         <div>{'插入表格'}</div>
        //         <div>
        //             {'行数:3，列数:3'}
        //             <button onClick={()=>{generate(3,3)}}>生成</button>
        //         </div>
        //     </div>
        // )
    }
}