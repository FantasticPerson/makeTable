/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';

export default class tdMaker extends Object{
    constructor(posInfo,id,style,content){
        super();
        const {x,y,cols,rows} = posInfo
        this.style = style;
        this.x = x;
        this.y = y;
        this.cols = cols;
        this.rows = rows;
        this.id = id;
        this.posInfo=posInfo;
        this.setStyle = setStyle;
        this.getNode = getNode;
    }
}

export function setStyle(style){
    let cStyle = this.style;
}

export function getNode(){
    return (<td colSpan={this.posInfo.cols} rowSpan={this.posInfo.rows} style={{...this.style,border:'1px solid'}} onClick={()=>{console.log('onclick:'+this.id)}} className="222333">{this.content}</td>)
}

