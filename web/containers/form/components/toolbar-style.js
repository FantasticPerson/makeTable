/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import ToolbarStyleItem from './toolbar-style-item'
import * as formAction from '../../../actions/form'
import ToolbarEditDisplay from './toolbar-style-editor'

export default class ToolbarStyle extends Component{
    constructor(){
        super();
        this.state = {view_state:'loading',subName:null}
    }

    componentDidMount(){
        // let styleArr = [
        //     {
        //         borderColor:{r: '241', g: '112', b: '19', a: '1'},
        //         borderSize:1,
        //         fontSize:12,
        //         isDefault:true,
        //         name:'样式一',
        //         id:1
        //     },{
        //         borderBlue:{r: '241', g: '112', b: '19', a: '0.5'},
        //         borderSize:1,
        //         fontSize:12,
        //         isDefault:false,
        //         name:'样式二',
        //         id:2
        //     }
        // ];
        // this.props.dispatch(formAction.updateStyleList(styleArr));
        // this.props.dispatch(formAction.updateCurrentStyleId(styleArr[0].id))
    }

    onStyleItemClick(id){
        this.props.dispatch(formAction.updateCurrentStyleId(id));
        this.setState({subName:null});
    }

    renderStyleArr(){
        const {formStyle} = this.props;
        return formStyle.list.map((item,index)=>{
            return (<ToolbarStyleItem data={item} key={index} cId={formStyle.id} onClick={this.onStyleItemClick.bind(this)}/>);
        })
    }

    renderSubView(){
        const {formStyle} = this.props;
        const {subName} = this.state;
        if(subName == 'viewAdd' || subName == 'viewModify'){
            return (<ToolbarEditDisplay formStyle={formStyle}/>)
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
                            this.onClickHandler('viewAdd');
                        }}>{'修改'}</div>
                        <div className="true-form-tool-bar-style-container-2-btn" onClick={()=>{
                            this.onClickHandler('viewModify');
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