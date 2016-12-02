/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'

export default class InputMaker extends Object{
    constructor(id,tdId,type,style,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'input';
        this.style = style;
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onChange = onChange;
        this.value = "点击编辑内容";
        this.onKeyDown = onKeyDown;
        this.onDoubleClick = onDoubleClick;
    }
}

export function onChange(e){
    let dom = e.currentTarget;
    if(dom.value == ''){
        dom.value = '点击编辑内容';
    }
    this.value = dom.value;
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
        <input type="text" style={{...this.style}} defaultValue={this.value}  key={index} onKeyDown={(e)=>{
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
        />
    )
}