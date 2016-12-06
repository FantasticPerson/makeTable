/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class DropBoxMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'dropBox';
        this.style = {dataArray:['右击编辑内容'],width:80,height:42};
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.onContextMenuShow = onContextMenuShow;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function onSetStyleConfirm(style,item){
    setItemStyle(item,style);
    if(style.dataArray) {
        let innerHtmlStr = "";
        style.dataArray.map((item, index)=> {
            innerHtmlStr += '<option key='+index +' value='+item+'>'+item+'</option>';
        });
        item.innerHTML = innerHtmlStr;
    }
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
    let options;
    if(this.style.dataArray){
        options = this.style.dataArray.map((item,index)=>{
            return <option key={index} value={item}>{item}</option>
        });
    }

    return (
        <select style={getStyleObj(cStyle,this.style)} key={index} onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.stopPropagation();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
            {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
        }}>{options}</select>
    )
}