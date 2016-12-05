/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import {stringifyRGBAObj} from '../data-helper'

export default class DropBoxMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'dropBox';
        this.style = {dataArray:['右击编辑内容']};
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onSetStyleConfirm = onSetStyleConfirm;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function onSetStyleConfirm(style,item){
    console.log(style);
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
    if(style.width){
        item.style.width = style.width + 'px';
    }
    if(style.height){
        item.style.height = style.height + 'px';
    }
    if(style.dataArray) {
        let innerHtmlStr = "";
        style.dataArray.map((item, index)=> {
            innerHtmlStr += '<option key='+index +' value='+item+'>'+item+'</option>';
        });
        item.innerHTML = innerHtmlStr;
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
    if(this.style.width){
        pStyle.width = this.style.width + 'px';
    }
    if(this.style.height){
        pStyle.height = this.style.height + 'px';
    }
    if(this.style.marginLeft){
        pStyle.marginLeft = this.style.marginLeft + 'px';
    }
    if(this.style.marginTop){
        pStyle.marginTop = this.style.marginTop + 'px';
    }
    let options;
    if(this.style.dataArray){
        options = this.style.dataArray.map((item,index)=>{
            return <option key={index} value={item}>{item}</option>
        });
    }

    return (
        <select style={{...style,...this.style}} key={index} onClick={(e)=>{e.stopPropagation()}} onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY,style:{...style1,...this.style},onConfirm:this.onSetStyleConfirm.bind(this),cTarget:e.currentTarget});
        }}>{options}</select>
    )
}