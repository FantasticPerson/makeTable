/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class TextAreaMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick,onDelete,recoverData){
        super();
        this.onContextMenu = onComponentClick;
        this.onDelete = onDelete;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onContextMenuShow = onContextMenuShow;
        this.exportData = exportData;
        this.tdId = tdId;
        this.type = 'textArea';
        this.id = recoverData ? recoverData.id : id;
        this.styleArr = styleArr;
        this.styleId = recoverData ? recoverData.styleId : styleId;
        this.style = recoverData ? recoverData.style : {fontStyleArray:[false,false]};
        this.value = recoverData ? recoverData.value : '';
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}


export function onSetStyleConfirm(style,item){
    setItemStyle(item,style);
    if(style.fontStyleArray){
        if(style.fontStyleArray[0]){
            item.style.fontWeight = 'bold';
        } else {
            item.style.fontWeight = 'normal';
        }
        if(style.fontStyleArray[1]){
            item.style.fontStyle = 'italic';
        } else {
            item.style.fontStyle = 'normal';
        }
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
        onDelete:this.onDelete,
        cTarget:item
    });
}

export function exportData(){
    return {
        tdId:this.tdId,
        id:this.id,
        type:this.type,
        style:this.style,
        styleId:this.styleId,
        value:this.value,
    };
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let cStyle2 = getStyleObj(cStyle,this.style);
    if(this.style.fontStyleArray[0]){
        cStyle2.fontWeight = 'bold';
    } else {
        cStyle2.fontWeight = 'normal';
    }
    if(this.style.fontStyleArray[1]){
        cStyle2.fontStyle = 'italic';
    } else {
        cStyle2.fontStyle = 'normal';
    }
    return (
        <textarea ref='textArea' style={cStyle2} defaultValue={this.value} key={index}
                  onChange={(e)=>{
                      this.value = e.currentTarget.value;
                  }}
                  onClick={
            (e)=>{
                e.stopPropagation();
                {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
            }} onContextMenu={(e)=>{
                e.stopPropagation();
                e.preventDefault();
                {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
                this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }}/>
    )
}