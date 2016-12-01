/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'

export default class TextAreaMaker extends Object{
    constructor(id,tdId,type,style,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'textArea';
        this.style = style;
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
    }
}

export function setStyle(style){
    this.style = style;
}

export function getNode(index){
    return (
        <textarea rows="3" cols="20" style={{...this.style}} key={index} onClick={(e)=>{e.stopPropagation()}} onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY});
        }}/>
    )
}