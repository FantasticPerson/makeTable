/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class TextAreaMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'textArea';
        this.style = {rows:3,cols:20};
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.onContextMenu = onComponentClick;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onContextMenuShow = onContextMenuShow;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}


export function onSetStyleConfirm(style,item){
    setItemStyle(item,style);
    this.style = {...this.style,...style};
}


export function onContextMenuShow(item,pageX,pageY){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style1 = {color:cStyle.fontColor,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize};
    this.onContextMenu({
        type:this.type,
        id:this.id,
        tdId:this.tdId,
        pageX:pageX,
        pageY:pageY,
        style:{...style1,...this.style},
        value:this.value,
        onConfirm:this.onSetStyleConfirm.bind(this),
        cTarget:item
    });
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    return (
        <textarea style={getStyleObj(cStyle,this.style)} key={index} onClick={
            (e)=>{
                e.stopPropagation();
                {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
            }} onContextMenu={(e)=>{
                e.stopPropagation();
                {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
                this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }}/>
    )
}