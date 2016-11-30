/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'

export default class ToolbarStyleItem extends Component{
    constructor(){
        super();
    }

    onClickHandler(){
        const {onClick,data} = this.props;
        onClick(data.id);
    }

    render(){
        const {data,cId} = this.props;
        let bgColor = cId == data.id ? '#ECF6E7' : '#FFFFFF';
        return (
            <div className="true-form-tool-bar-style-item-container" style={{backgroundColor:bgColor}} onClick={()=>{this.onClickHandler()}}>
                <div className="true-form-tool-bar-style-item-container-icon true-form-tool-bar-style-style-1"></div>
                <div className="true-form-tool-bat-style-item-container-text">{data.name}</div>
            </div>
        )
    }
}