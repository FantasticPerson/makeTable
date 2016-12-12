/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'
import ToolBarEditDisplay from './toolbar-edit-display'
import ComponentPicker from './componentPicker'
import {editElement,editDisplay,editPreview,editSource} from '../const'
import * as OverLayNames from '../../../constants/OverLayNames'
import {showOverLayByName} from '../../../actions/view'

export default class ToolBarEdit extends Component{
    constructor(){
        super();
        this.state={cTool:[editDisplay,editElement]}
    }

    renderSubTool(){
        const {cTool} = this.state;
        return cTool.map((item,index)=>{
            if(item == editDisplay){
                const {generateTable} = this.props.data;
                let toolBarEditDisplayData = {generateTable,confirmClick:this.confirmClick.bind(this)};
                return (<ToolBarEditDisplay key={index} data={toolBarEditDisplayData}/>);
            } else if(item == editElement){
                return (<ComponentPicker key={index}/>)
            }
        })
    }

    onEditToolClick(name){
        if(name == 'preview'){
            const {dispatch} = this.props.data;
            if(document.getElementsByTagName('table')[0]) {
                dispatch(showOverLayByName(OverLayNames.PREVIEW, {dispatch}));
            }
        } else {
            let cTool = this.state.cTool;
            if (cTool.indexOf(name) >= 0) {
                cTool.splice(cTool.indexOf(name), 1);
            } else {
                cTool.push(name);
            }
            this.setState({cTool: cTool});
        }
    }

    confirmClick(name){
        let cTool = this.state.cTool;
        if(cTool.indexOf(editDisplay) >= 0){
            cTool.splice(cTool.indexOf(editDisplay),1);
            this.setState({cTool:cTool});
        }
    }

    render(){
        const {cTool} = this.state;
        const {} = this.props;
        let styleArr = [{color1:'#eef6fc',color2:'#6998d6'},{color1:'#FFFFFF',color2:'#000000'}];
        return (
            <div className="abc-form-tool-bar-edit-container">
                <div className="abc-form-tool-bar-edit-container-body">
                    <div className="abc-form-tool-bar-edit-container-body-element"
                         style={{backgroundColor:styleArr[cTool.indexOf(editElement) >= 0 ? 0 : 1].color1}}
                         onClick={()=>{this.onEditToolClick(editElement)}}>
                        <div className="true-form-edit-element-icon abc-form-tool-bar-edit-container-body-item-icon"></div>
                        <div className="abc-form-tool-bar-edit-container-body-item-text"
                             style={{color:styleArr[cTool.indexOf(editElement) >= 0 ? 0 : 1].color2}}>
                            {'部件'}
                        </div>
                    </div>
                    <div className="abc-form-tool-bar-edit-container-body-display"
                         style={{backgroundColor:styleArr[cTool.indexOf(editDisplay) >= 0 ? 0 : 1].color1}}
                         onClick={()=>{this.onEditToolClick(editDisplay)}}>
                        <div className="true-form-edit-display-icon abc-form-tool-bar-edit-container-body-item-icon"></div>
                        <div className="abc-form-tool-bar-edit-container-body-item-text"
                             style={{color:styleArr[cTool.indexOf(editDisplay) >= 0 ? 0 : 1].color2}}>
                            {'布局'}
                        </div>
                    </div>
                    <div className="abc-form-tool-bar-edit-container-body-preview"
                         style={{backgroundColor:styleArr[1].color1}}
                         onClick={()=>{this.onEditToolClick('preview')}}>
                        <div className="true-form-edit-preview-icon abc-form-tool-bar-edit-container-body-item-icon"></div>
                        <div className="abc-form-tool-bar-edit-container-body-item-text"
                             style={{color:styleArr[1].color2}}>
                            {'预览'}
                        </div>
                    </div>
                    <div className="abc-form-tool-bar-edit-container-body-source"
                         style={{backgroundColor:styleArr[cTool.indexOf(editSource) >= 0 ? 0 : 1].color1}}
                         onClick={()=>{this.onEditToolClick('source')}}>
                        <div className="true-form-edit-source-icon abc-form-tool-bar-edit-container-body-item-icon"></div>
                        <div className="abc-form-tool-bar-edit-container-body-item-text"
                             style={{color:styleArr[cTool.indexOf(editSource) >= 0 ? 0 : 1].color2}}>
                            {'查看源代码'}
                        </div>
                    </div>
                </div>
                <div className="abc-form-tool-bar-edit-container-sub-body">
                    {this.renderSubTool()}
                </div>
            </div>
        )
    }
}