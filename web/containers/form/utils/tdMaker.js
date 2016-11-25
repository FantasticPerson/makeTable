/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';

export default class tdMaker extends Object{
    constructor(posInfo,id,style,mockType,content){
        super();
        this.style = style;
        this.pStyle = {border:'1px solid'};
        this.id = id;
        this.posInfo=posInfo;
        this.mockType = mockType;//0:not mock;1:col;2:row;3:row&col
        this.getNode = getNode;
    }
}

export function getNode(tbInfo,index=0){
    const {cols,rows} = tbInfo;

    let style = {...this.style,...this.pStyle};
    if(this.mockType == 0) {
        return (<td colSpan={cols} key={index} rowSpan={rows} style={style} className="222333">{this.content}</td>)
    }
    return null;
}

