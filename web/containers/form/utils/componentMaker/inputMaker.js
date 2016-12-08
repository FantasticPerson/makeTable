/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {componentInput} from '../../const'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class InputMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick,onDelete,recoverData){
        super();
        if(!recoverData) {
            this.tdId = tdId;
            this.id = id;
            this.type = componentInput;
            this.style = {};
            this.styleArr = styleArr;
            this.styleId = styleId;
            this.onContextMenu = onComponentClick;
            this.onDelete = onDelete;
            this.value = "点击编辑内容";
            this.getNode = getNode;
            this.setStyle = setStyle;
            this.onSetStyleConfirm = onSetStyleConfirm;
            this.onContextMenuShow = onContextMenuShow;
            this.onClickShow = onClickShow;
            this.exportData = exportData;
        } else {
            this.onContextMenu = onComponentClick;
            this.onDelete = onDelete;
            this.style = recoverData.style;
            this.styleArr = styleArr;
            this.tdId = tdId;
            this.id = recoverData.id;
            this.type = componentInput;
            this.styleId = recoverData.styleId;
            this.value = recoverData.value;
            this.getNode = getNode;
            this.setStyle = setStyle;
            this.onSetStyleConfirm = onSetStyleConfirm;
            this.onContextMenuShow = onContextMenuShow;
            this.onClickShow = onClickShow;
            this.exportData = exportData;
            // id:this.id,
            //     type:componentInput,
            //     style:this.style,
            //     styleId:this.styleId,
            //     value:this.value
        }
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function onSetStyleConfirm(style,item){
    setItemStyle(item,style);
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
    return (
        <input type="text" style={getStyleObj(cStyle,this.style)} defaultValue={this.value}  key={index}
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