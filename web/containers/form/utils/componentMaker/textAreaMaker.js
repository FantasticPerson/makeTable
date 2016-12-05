/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {stringifyRGBAObj} from '../data-helper'

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
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}


export function onSetStyleConfirm(style,item){
    if(style.fontSize) {
        item.style.fontSize = style.fontSize+'px';
    }
    if(style.color) {
        item.style.color = stringifyRGBAObj(style.color);
    }
    if(style.fontFamily) {
        item.style.fontFamily = style.fontFamily;
    }
    if(style.marginTop){
        item.style.marginTop = style.marginTop + 'px';
    }
    if(style.marginLeft){
        item.style.marginLeft = style.marginTop + 'px';
    }
    if(style.rows){
        item.rows = style.rows
    }
    if(style.cols){
        item.cols = style.cols;
    }
    this.style = {...this.style,...style};
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style = {color:stringifyRGBAObj(cStyle.fontColor),fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize+'px'};
    let style1 = {color:cStyle.fontColor,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize};
    let pStyle = {};
    if(this.style.color){
        pStyle.color = stringifyRGBAObj(this.style.color);
    }
    if(this.style.fontSize){
        pStyle.fontSize = this.style.fontSize + 'px';
    }
    if(this.style.fontFamily){
        pStyle.fontFamily = this.style.fontFamily;
    }
    if(this.style.marginLeft){
        pStyle.marginLeft = this.style.marginLeft + 'px';
    }
    if(this.style.marginTop){
        pStyle.marginTop = this.style.marginTop + 'px';
    }
    let rows = this.style.rows ? this.style.rows : 3;
    let cols = this.style.cols ? this.style.cols : 20;
    return (
        <textarea rows={rows} cols={cols} style={{...style,...pStyle}} key={index} onClick={(e)=>{e.stopPropagation()}} onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            {/*this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY});*/}
            this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY,style:{...style1,...this.style},value:this.value,onConfirm:this.onSetStyleConfirm.bind(this),cTarget:e.currentTarget});
        }}/>
    )
}