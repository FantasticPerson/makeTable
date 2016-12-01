/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ToolbarStyleItem from './toolbar-style-item'
import * as formAction from '../../../actions/form'
import ToolbarStyleEditor from './toolbar-style-editor'

export default class ToolbarStyle extends Component{
    constructor(){
        super();
        this.state = {view_state:'loading',subName:null}
    }

    onStyleItemClick(id){
        const {onUpdateStyle} = this.props;
        this.props.dispatch(formAction.updateCurrentStyleId(id));
        this.setState({subName:null});
        setTimeout(function(){
            onUpdateStyle();
        }.bind(this),20)
    }

    renderStyleArr(){
        const {formStyle} = this.props;
        return formStyle.list.map((item,index)=>{
            return (<ToolbarStyleItem data={item} key={index} cId={formStyle.id} onClick={this.onStyleItemClick.bind(this)}/>);
        })
    }

    renderSubView(){
        const {formStyle,onUpdateStyle} = this.props;
        const {subName} = this.state;
        if(subName == 'viewAdd' || subName == 'viewModify'){
            return (<ToolbarStyleEditor formStyle={formStyle} subName={subName} onUpdateStyle={onUpdateStyle} dispatch={this.props.dispatch}/>)
        }
    }

    onClickHandler(name){
        const {subName} = this.state;
        let name2 = subName == name ? null : name;
        this.setState({subName:name2});
    }

    render(){
        return (
            <div>
                <div className="true-form-tool-bar-style-container">
                    <div className="true-form-tool-bar-style-container-1">
                        <div className="true-form-tool-bar-style-container-1-text-container">
                            <div className="true-form-tool-bar-style-container-1-text">{'已保存的样式'}</div>
                        </div>
                        <div className="true-form-tool-bar-style-container-1-styles">
                            {this.renderStyleArr()}
                        </div>
                    </div>
                    <div className="true-form-tool-bar-style-container-2">
                        <div className="true-form-tool-bar-style-container-2-text-container">
                            <div className="true-form-tool-bar-style-container-2-text">{'样式编辑'}</div>
                        </div>
                        <div className="true-form-tool-bar-style-container-2-btn" onClick={()=>{
                            this.onClickHandler('viewModify');
                        }}>{'修改'}</div>
                        <div className="true-form-tool-bar-style-container-2-btn" onClick={()=>{
                            this.onClickHandler('viewAdd');
                        }} style={{marginTop:'-30px',marginLeft:'80px'}}>{'添加'}</div>
                    </div>
                </div>
                <div className="true-form-tool-bar-style-sub-container">
                    {this.renderSubView()}
                </div>
            </div>
        )
    }
}