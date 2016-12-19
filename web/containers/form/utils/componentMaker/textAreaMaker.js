/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {getStyleObj,setItemStyle,cloneData} from '../data-helper'
import * as optionTypes from '../../utils/history/operationType'

export default class TextAreaMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick,onDelete,afterUpdateStyle,addHistoryItem,recoverData){
        super();
        this.onContextMenu = onComponentClick;
        this.onDelete = onDelete;
        this.addHistoryItem = addHistoryItem;
        this.afterUpdateStyle = afterUpdateStyle;
        this.onContextMenuShow = onContextMenuShow;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.exportData = exportData;
        this.setStyle = setStyle;
        this.getNode = getNode;
        this.tdId = tdId;
        this.type = 'textArea';
        this.id = recoverData ? recoverData.id : id;
        this.styleArr = styleArr;
        this.styleId = recoverData ? recoverData.styleId : styleId;
        this.style = recoverData ? recoverData.style : {fontStyleArray:[false,false],width:120,height:55};
        this.value = recoverData ? recoverData.value : '';
        this.propName = 'default';
        this.propId = ''+this.tdId+this.id;

        this.goBack = goBack;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function goBack(data){
    const {style,propName,propId} = data.data;
    this.propName = propName;
    this.propId = propId;
    this.style = style;
    this.afterUpdateStyle();
}

export function onSetStyleConfirm(style,item){
    setItemStyle(item,style);
    this.addHistoryItem(optionTypes.ITEM_SET_STYLE,{tdId:this.tdId,id:this.id,style:cloneData(this.style),propName:this.propName,propId:this.propId});
    this.style = {...this.style,...style};
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
        styleId:this.styleId,
        value:this.value,
    };
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let cStyle2 = getStyleObj(cStyle,this.style);
    return (
        <textarea name={this.propName} id={this.propId} ref='textArea' style={{...cStyle2,textAlign:'left'}} defaultValue={this.value} key={index}
                  onChange={(e)=>{
                      this.value = e.currentTarget.value;
                  }}
                  onClick={(e)=>{
                    e.stopPropagation();
                  }} onContextMenu={(e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }}/>
    )
}