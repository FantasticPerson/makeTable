/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';

export default class tdMaker extends Object{
    constructor(posInfo,id,style,mockType,onTdClick,content){
        super();
        this.style = style;
        this.pStyle = {border:'1px solid'};
        this.id = id;
        this.posInfo=posInfo;
        this.mockType = mockType;//0:not mock;1:col;2:row;3:row&col
        this.getNode = getNode;
        this.choose = false;
        this.state={choose:false};
        this.onTdClick = onTdClick;
    }
}

export function getNode(tbInfo,index=0){
    const {choose} = this.state;
    const {cols,rows} = tbInfo;
    let style = {...this.style,...this.pStyle};
    if(this.mockType == 0) {
        let bgColor = choose ? '#eeeeee' : '#ffffff';
        return (<td colSpan={cols} key={index} rowSpan={rows} style={{...style,backgroundColor:bgColor}} onClick={()=>{
            this.choose = !this.choose;
            this.onTdClick(this.id,this.choose);
        }}>{this.content}</td>)
    }

    return null;
}

