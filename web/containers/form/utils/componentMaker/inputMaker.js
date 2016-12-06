/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {componentInput} from '../../const'
import {getStyleObj,setItemStyle} from '../data-helper'

export default class InputMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = componentInput;
        this.style = {};
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.onContextMenu = onComponentClick;
        this.value = "点击编辑内容";
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.onContextMenuShow = onContextMenuShow;
        this.onClickShow = onClickShow;
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
        cTarget:item
    });
}

export function onClickShow(item){
    item.focus();
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
                this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
                {/*e.component = {obj:this,node:e.currentTarget,pageX:e.pageX,pageY:e.pageY};*/}
            }}
        />
    )
}