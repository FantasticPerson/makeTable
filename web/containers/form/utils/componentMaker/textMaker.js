/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class TextMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick,onDelete,tdStyle){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'text';
        this.value = "右击编辑内容";
        this.style = {};
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.tdStyle = tdStyle;
        this.onContextMenu = onComponentClick;
        this.onDelete = onDelete;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.onContextMenuShow = onContextMenuShow;
        this.onClickShow = onClickShow;
        this.setTdStyle = setTdStyle;
        this.setValue = setValue;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function setTdStyle(style){
    this.tdStyle = style;
}

export function setValue(value){
    this.value = value;
}

export function onSetStyleConfirm(style,text,item){
    item.innerHTML = text;
    setItemStyle(item,style);
    this.style = {...this.style,...style};
    this.value = text;
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
        onDelete:this.onDelete,
        cTarget:item
    });
}

export function onClickShow(item){
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    console.log(this.tdStyle);
    return (
        <span style={getStyleObj(cStyle,this.tdStyle)} key={index} onClick={(e)=>{
            e.stopPropagation();
            {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
        }} onContextMenu={(e)=>{
            e.preventDefault();
            {/*e.stopPropagation();*/}
            e.component = {item:e.currentTarget,obj:this,value:this.value};
            {/*this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);*/}
            {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
        }}
        >{this.value}</span>
    )
}