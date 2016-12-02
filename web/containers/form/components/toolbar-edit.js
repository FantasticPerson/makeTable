/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'
import ToolBarEditDisplay from './toolbar-edit-display'
import ComponentPicker from './componentPicker'

export default class ToolBarEdit extends Component{
    constructor(){
        super();
        this.state={cTool:[]}
    }

    renderSubTool(){
        const {cTool} = this.state;
        return cTool.map((item,index)=>{
            if(item == 'display'){
                const {clickGenerateTable} = this.props;
                return (<ToolBarEditDisplay key={index} clickGenerateTable={clickGenerateTable} onConfirmClick={this.onConfirmClicked.bind(this)}/>);
            } else if(item == 'element'){
                return (<ComponentPicker key={index}/>)
            }
        })
    }

    onClickHandler(name){
        let cTool = this.state.cTool;
        if(cTool.indexOf(name) >= 0){
            cTool.splice(cTool.indexOf(name),1);
        } else {
            cTool.push(name);
        }
        this.setState({cTool:cTool});
    }

    onConfirmClicked(name){
        let cTool = this.state.cTool;
        if(cTool.indexOf('display') >= 0){
            cTool.splice(cTool.indexOf('display'),1);
            this.setState({cTool:cTool});
        }
        // this.setState({cTool:null});
    }

    getStyleByName(name){
        const {cTool} = this.state;
        if(name == cTool){
            return {color1:'#eef6fc',color2:'#6998d6'}
        } else {
            return {color1:'#FFFFFF',color2:'#000000'}
        }
    }

    render(){
        const {cTool} = this.state;
        const {} = this.props;
        let styleElement = cTool.indexOf('element') >=0 ?  {color1:'#eef6fc',color2:'#6998d6'} : {color1:'#FFFFFF',color2:'#000000'};
        let styleDisplay = cTool.indexOf('display') >=0 ?  {color1:'#eef6fc',color2:'#6998d6'} : {color1:'#FFFFFF',color2:'#000000'};
        let stylePreview = cTool.indexOf('preview') >=0 ?  {color1:'#eef6fc',color2:'#6998d6'} : {color1:'#FFFFFF',color2:'#000000'};
        let styleSource = cTool.indexOf('source') >=0 ?  {color1:'#eef6fc',color2:'#6998d6'} : {color1:'#FFFFFF',color2:'#000000'};
        return (
            <div className="true-form-tool-bar-edit-container">
                <div className="true-form-edit-icon-container">
                    <div className="true-form-edit-element-icon-container" style={{backgroundColor:styleElement.color1}} onClick={()=>{this.onClickHandler('element')}}>
                        <div className="true-form-edit-element-icon true-form-edit-icon-style"></div>
                        <div className="true-form-edit-icon-style" style={{color:styleElement.color2}}>{'部件'}</div>
                    </div>
                    <div className="true-form-edit-display-icon-container" style={{backgroundColor:styleDisplay.color1}} onClick={()=>{this.onClickHandler('display')}}>
                        <div className="true-form-edit-display-icon true-form-edit-icon-style"></div>
                        <div className="true-form-edit-icon-style" style={{color:styleDisplay.color2}}>{'布局'}</div>
                    </div>
                    <div className="true-form-edit-preview-icon-container" style={{backgroundColor:stylePreview.color1}} onClick={()=>{this.onClickHandler('preview')}}>
                        <div className="true-form-edit-preview-icon true-form-edit-icon-style"></div>
                        <div className="true-form-edit-icon-style" style={{color:stylePreview.color2}}>{'预览'}</div>
                    </div>
                    <div className="true-form-edit-source-icon-container" style={{backgroundColor:styleSource.color1}} onClick={()=>{this.onClickHandler('source')}}>
                        <div className="true-form-edit-source-icon true-form-edit-icon-style"></div>
                        <div className="true-form-edit-icon-style" style={{color:styleSource.color2}}>{'查看源代码'}</div>
                    </div>
                </div>
                <div className="true-form-edit-icon-sub-container">
                    {this.renderSubTool()}
                </div>
            </div>
        )
    }
}