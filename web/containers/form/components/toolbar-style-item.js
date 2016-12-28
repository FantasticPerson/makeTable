/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleSingleObj} from '../utils/data-helper'

export default class ToolbarStyleItem extends Component{
    constructor(){
        super();
    }

    onClick(){
        const {onClick,data,cId} = this.props;
        if(cId != data.id) {
            onClick(data.id);
        }
    }

    render(){
        const {data,cId,index} = this.props;
        let bgColor = cId == data.id ? '#ECF6E7' : '#FFFFFF';
        return (
            <div className="abc-form-tool-bar-style-item-container" style={{backgroundColor:bgColor,marginLeft:index==0?'0':'5px'}} onClick={()=>{this.onClick()}}>
                <div style={{
                    width: '50px',
                    height: '55px',
                    marginLeft: '5px',
                    marginTop:'5px',
                    backgroundColor: 'white',
                    paddingTop: '10px',
                    overflow: 'hidden',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <div style={{
                        ...getStyleSingleObj(data),
                        width:'40px'
                    }}>字</div>
                </div>
                <div className="abc-form-tool-bat-style-item-container-text">{data.name}</div>
            </div>
        )
    }
}