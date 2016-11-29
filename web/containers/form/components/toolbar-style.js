/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ToolbarStyleItem from './toolbar-style-item'
import * as formAction from '../../../actions/form'

export default class ToolbarStyle extends Component{
    constructor(){
        super();
        this.state = {styleArr:[],cIndex:null,view_state:'loading'}
    }

    componentDidMount(){
        let styleArr = [
            {
                borderColor:'red',
                borderSize:'1px',
                fontSize:'12px',
                isDefault:true,
                name:'样式一',
                id:1
            },{
                borderBlue:'green',
                borderSize:'1px',
                fontSize:'12px',
                isDefault:false,
                name:'样式二',
                id:2
            }
        ];
        this.setState({styleArr:styleArr,view_state:'ready',cIndex:1});
        this.props.dispatch(formAction.updateFormStyle(styleArr[0]));
    }

    onStyleItemClick(obj){
        this.props.dispatch(formAction.updateFormStyle(obj));
    }

    renderStyleArr(){
        const {formStyle} = this.props;
        const {styleArr,cIndex} = this.state;
        return styleArr.map((item,index)=>{
            return (<ToolbarStyleItem data={item} formStyle={formStyle} key={index} cIndex={cIndex} onClick={this.onStyleItemClick.bind(this)}/>);
        })
    }

    render(){
        return (
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
                        <div className="true-form-tool-bar-style-container-2-text">{'新增样式'}</div>
                    </div>
                    <div className="true-form-tool-bar-style-container-2-btn">{'添加'}</div>
                </div>
            </div>
        )
    }
}