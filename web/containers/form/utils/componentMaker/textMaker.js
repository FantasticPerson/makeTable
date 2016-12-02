/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'

export default class TextMaker extends Object{
    constructor(id,tdId,type,style,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'text';
        this.style = style;
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.value = "右击编辑内容";
    }
}

export function setStyle(style){
    this.style = style;
}

export function onKeyDown(e){
    if(e.which == 13) {
        let dom = e.currentTarget;
        dom.disabled = true;
    }
}

export function onDoubleClick(e){
    let dom = e.currentTarget;
    dom.disabled = false;
}

export function getNode(index){
    return (
        <span style={{...this.style}} key={index} onKeyDown={(e)=>{
            console.log(e.which)
        }} onDoubleClick={(e)=>{
            this.onDoubleClick(e);
        }} onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY});
        }} onChange={(e)=>{
            this.onChange(e);
        }} onKeyPress={(e)=>{
            this.onKeyDown(e);
        }}
        >{this.value}</span>
    )
}