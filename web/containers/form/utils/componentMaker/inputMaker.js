/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {componentInput} from '../../const'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class InputMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick,onDelete,recoverData){
        super();
        this.tdId = tdId;
        this.onContextMenu = onComponentClick;
        this.onDelete = onDelete;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.onContextMenuShow = onContextMenuShow;
        this.onClickShow = onClickShow;
        this.exportData = exportData;
        this.styleArr = styleArr;
        this.type = componentInput;
        this.id = recoverData ? recoverData.id : id;
        this.styleId = recoverData ? recoverData.styleId : styleId;
        this.style = recoverData ? recoverData.style : {fontStyleArray:[false,false]};
        this.value = recoverData ? recoverData.value : "点击编辑内容";
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

export function onClickShow(item){
    item.focus();
}

export function exportData(){
    return {
        // tdId:this.tdId,
        id:this.id,
        type:componentInput,
        style:this.style,
        styleId:this.styleId,
        value:this.value
    }
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style1 = {color:cStyle.fontColor,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize};
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
        <input type="text" style={cStyle2} defaultValue={this.value}  key={index}
            onClick={(e)=>{
                e.stopPropagation();
                {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
            }} onContextMenu={(e)=>{
                e.stopPropagation();
                e.preventDefault();
                this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
                {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
            }}
        />
    )
}