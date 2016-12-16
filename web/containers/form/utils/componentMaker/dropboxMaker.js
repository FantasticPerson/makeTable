/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class DropBoxMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick,onDelete,afterUpdateStyle,recoverData){
        super();
        this.onContextMenu = onComponentClick;
        this.onDelete = onDelete;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.onContextMenuShow = onContextMenuShow;
        this.afterUpdateStyle = afterUpdateStyle;
        this.exportData = exportData;
        this.tdId = tdId;
        this.id = recoverData ? recoverData.id : id;
        this.type = 'dropBox';
        this.styleArr = styleArr;
        this.styleId = recoverData ? recoverData.styleId : styleId;
        this.style = recoverData ? recoverData.style : {
            dataArray: [],
            width: 80,
            height: 42
        };
        this.propName = 'default';
        this.propId = ''+this.tdId+this.id;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function onSetStyleConfirm(style,item,props){
    setItemStyle(item,style);
    // if(style.dataArray) {
    //     let innerHtmlStr = "";
    //     style.dataArray.map((item, index)=> {
    //         innerHtmlStr += '<option key='+index +' value='+item+'>'+item+'</option>';
    //     });
    //     item.innerHTML = innerHtmlStr;
    // }
    this.propName = props.name;
    this.propId = props.id;
    this.style = {...this.style,...style};
    this.afterUpdateStyle();
}

export function onContextMenuShow(item,pageX,pageY){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style1 = {
        color:cStyle.color,
        fontFamily:cStyle.fontFamily,
        fontSize:cStyle.fontSize,
        fontStyleArray:cStyle.fontStyleArray
    };
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
        cTarget:item,
        propName:this.propName,
        propId:this.propId
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
    return (
        <select name={this.propName} id={this.propId} style={{...cStyle2,textAlign:'left'}} key={index} onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }}>{options}</select>
    )
}