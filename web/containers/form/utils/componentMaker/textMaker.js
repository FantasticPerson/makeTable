/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {stringifyRGBAObj} from '../data-helper'

export default class TextMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'text';
        this.style = {};
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.value = "右击编辑内容";
        this.onSetStyleConfirm = onSetStyleConfirm;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
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

export function onSetStyleConfirm(style,text,item){
    item.innerHTML = text;
    if(style.fontSize) {
        item.style.fontSize = style.fontSize+'px';
    }
    if(style.color) {
        item.style.fontColor = style.color;
    }
    if(style.fontFamily) {
        item.style.fontFamily = style.fontFamily;
    }
    this.style = {...this.style,...style};
    this.value = text;
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let originColor = cStyle.fontColor;
    let color = 'rgba('+originColor.r+','+originColor.g+','+originColor.b+','+originColor.a+')';
    let style = {color:color,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize+'px'};
    let style2 = {color:color,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize};

    let pAColor;
    let pColor = this.style.color;
    if(pColor){
        pAColor = {color:'rgba('+pColor.r+','+pColor.g+','+pColor.b+','+pColor.a+')'};
        if(this.style.fontSize){
            pAColor.fontSize = this.style.fontSize + 'px';
        }
    }
    console.log({...style,...this.style});
    return (
        <span style={{...style,...this.style,...pAColor}} key={index} onDoubleClick={(e)=>{
            this.onDoubleClick(e);
        }} onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY,style:{...style2,...this.style},value:this.value,onConfirm:this.onSetStyleConfirm.bind(this),cTarget:e.currentTarget});
        }} onChange={(e)=>{
            this.onChange(e);
        }} onKeyPress={(e)=>{
            this.onKeyDown(e);
        }}
        >{this.value}</span>
    )
}