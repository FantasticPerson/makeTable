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
        this.style = {};
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.groupData = ['右击编辑内容'];
        this.onSetStyleConfirm = onSetStyleConfirm;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function onSetStyleConfirm(style,item){
    // if(style.fontSize) {
    //     item.style.fontSize = style.fontSize+'px';
    // }
    // if(style.color) {
    //     item.style.color = stringifyRGBAObj(style.color);
    // }
    // if(style.fontFamily) {
    //     item.style.fontFamily = style.fontFamily;
    // }
    // if(style.marginTop){
    //     item.style.marginTop = style.marginTop + 'px';
    // }
    // if(style.marginLeft){
    //     item.style.marginLeft = style.marginTop + 'px';
    // }
    if(style.dataArray) {
        let innerHtmlStr = "";
        style.dataArray.map((item, index)=> {
            innerHtmlStr += '<option key='+index +' value='+item+'>'+item+'</option>';
        });
        item.innerHTML = innerHtmlStr;
        this.dataArray = style.dataArray;
    }
    this.style = {...this.style,...style};
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style = {color:cStyle.fontColor,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize};
    let options = this.groupData.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    });
    return (
        <select style={{...style,...this.style,width:'120px',height:'30px'}} key={index} onClick={(e)=>{e.stopPropagation()}} onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            {/*this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY});*/}
            this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY,style:{...this.style},value:this.value,onConfirm:this.onSetStyleConfirm.bind(this),cTarget:e.currentTarget});
        }}>{options}</select>
    )
}