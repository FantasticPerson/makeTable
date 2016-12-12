/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ToolbarStyleItem from './toolbar-style-item'
import * as formAction from '../../../actions/form'
import ToolbarStyleEditor1 from './toolbar-style-editor1'

import {styleViewAdd,styleViewModify} from '../const'

export default class ToolbarStyle extends Component{
    constructor(){
        super();
        this.state = {view_state:'loading',subName:null}
    }

    onStyleItemClick(id){
        const {afterUpdateStyle} = this.props;
        this.props.dispatch(formAction.updateCurrentStyleId(id));
        this.setState({subName:null});
        setTimeout(function(){
            afterUpdateStyle();
        }.bind(this),20)
    }

    renderStyleArr(){
        const {formStyle} = this.props;
        return formStyle.list.map((item,index)=>{
            return (<ToolbarStyleItem data={item} key={index} cId={formStyle.id} onClick={this.onStyleItemClick.bind(this)}/>);
        })
    }

    onCloseStyleEditor(){
        this.setState({subName:null});
    }

    renderSubView(){
        const {formStyle,afterUpdateStyle} = this.props;
        const {subName} = this.state;
        if(subName == styleViewAdd || subName == styleViewModify){
            return <ToolbarStyleEditor1 formStyle={formStyle} subName={subName}  onUpdateStyle={afterUpdateStyle} dispatch={this.props.dispatch} onClickClose={this.onCloseStyleEditor.bind(this)}/>
        }
    }

    onClickHandler(name){
        const {subName} = this.state;
        let name2 = subName == name ? null : name;
        this.setState({subName:null});
        if(name2 != null){
            setTimeout(function(){
                this.setState({subName:name2});
            }.bind(this),20);
        }
    }

    render(){
        return (
            <div>
                <div className="abc-form-tool-bar-style-container">
                    <div className="abc-form-tool-bar-style-container-up">
                        <div className="abc-form-tool-bar-style-container-up-text-container">
                            <div className="abc-form-tool-bar-style-container-up-text-container-text">{'已保存的样式'}</div>
                        </div>
                        <div className="abc-form-tool-bar-style-container-up-styles">
                            {this.renderStyleArr()}
                        </div>
                    </div>
                    <div className="abc-form-tool-bar-style-container-down">
                        <div className="abc-form-tool-bar-style-container-down-text-container">
                            <div className="abc-form-tool-bar-style-container-down-text-container-text">{'样式编辑'}</div>
                        </div>
                        <div className="abc-form-tool-bar-style-container-down-btn-modify" onClick={()=>{
                            this.onClickHandler(styleViewModify);
                        }}>{'修改'}</div>
                        <div className="abc-form-tool-bar-style-container-down-btn-add" onClick={()=>{
                            this.onClickHandler(styleViewAdd);
                        }} style={{marginTop:'-20px',marginLeft:'60px'}}>{'添加'}</div>
                    </div>
                </div>
                <div className="abc-form-tool-bar-style-sub-container">
                    {this.renderSubView()}
                </div>
            </div>
        )
    }
}