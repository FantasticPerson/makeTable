/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class DropBoxMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick,onDelete,recoverData){
        super();
        this.onContextMenu = onComponentClick;
        this.onDelete = onDelete;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.onContextMenuShow = onContextMenuShow;
        this.exportData = exportData;
        this.tdId = tdId;
        this.id = recoverData ? recoverData.id : id;
        this.type = 'dropBox';
        this.styleArr = styleArr;
        this.styleId = recoverData ? recoverData.styleId : styleId;
        this.style = recoverData ? recoverData.style : {
            dataArray: ['右击编辑内容'],
            width: 80,
            height: 42,
            fontStyleArray:[false,false]
        };
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
    console.log(this.style);
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
        styleId:this.styleId
    };
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
    let cStyle2 = getStyleObj(cStyle,this.style);
    if(this.style.fontStyleArray[0]){
        cStyle2.fontWeight = 'bold';
    } else {
        cStyle2.fontWeight = 'normal';
    }
    if(this.style.fontStyleArray[0]){
        cStyle2.fontStyle = 'italic'
    } else {
        cStyle2.fontStyle = 'normal'
    }
    return (
        <select style={cStyle2} key={index} onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
            {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
        }}>{options}</select>
    )
}