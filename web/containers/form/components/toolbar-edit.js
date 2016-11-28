/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'
import ToolBarEditDisplay from './toolbar-edit-display'

export default class ToolBarEdit extends Component{
    constructor(){
        super();
        this.state={cTool:null}
    }

    renderSubTool(){
        const {cTool} = this.state;
        if(cTool == 'display'){
            const {clickGenerateTable} = this.props;
            return (<ToolBarEditDisplay clickGenerateTable={clickGenerateTable} onConfirmClick={this.onConfirmClicked.bind(this)}/>);
        }
    }

    onClickHandler(name){
        const {cTool} = this.state;
        let name2 = (cTool == name ? null : name);
        this.setState({cTool:name2});
    }

    onConfirmClicked(){
        this.setState({cTool:null});
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
        const {} = this.props;
        let styleElement = this.getStyleByName('element');
        let styleDisplay = this.getStyleByName('display');
        let stylePreview = this.getStyleByName('preview');
        let styleSource = this.getStyleByName('source');
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