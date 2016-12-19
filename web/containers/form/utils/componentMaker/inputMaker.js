/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {componentInput} from '../../const'
import {getStyleObj,setItemStyle,cloneData} from '../data-helper'
import * as optionTypes from '../../utils/history/operationType'

export default class InputMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick,onDelete,afterUpdateStyle,addHistoryItem,addNewCancelHistory,recoverData){
        super();
        this.tdId = tdId;
        this.onContextMenu = onComponentClick;
        this.addHistoryItem = addHistoryItem;
        this.addNewCancelHistory = addNewCancelHistory;
        this.afterUpdateStyle = afterUpdateStyle;
        this.onDelete = onDelete;
        this.styleArr = styleArr;
        this.type = componentInput;
        this.id = recoverData ? recoverData.id : id;
        this.style = recoverData ? recoverData.style : {width:120,height:25.33};
        this.value = recoverData ? recoverData.value : "";
        this.propId = ''+this.tdId+this.id;
        this.styleId = recoverData ? recoverData.styleId : styleId;
        this.propName = 'default';

        this.getNode = getNode;
        this.setStyle = setStyle;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.onContextMenuShow = onContextMenuShow;
        this.exportData = exportData;
        this.goBack = goBack;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function goBack(data,isCancel=false){
    if(!isCancel) {
        this.addNewCancelHistory(optionTypes.ITEM_SET_STYLE, {
            tdId: this.tdId,
            id: this.id,
            style: cloneData(this.style),
            propId: this.propId,
            propName: this.propName
        });
    }
    const {style,propId,propName} = data.data;
    this.style = style;
    this.propName = propName;
    this.propId = propId;
    this.afterUpdateStyle();
}

export function onSetStyleConfirm(style,item,props){
    // setItemStyle(item,style);
    this.addHistoryItem(optionTypes.ITEM_SET_STYLE,{tdId:this.tdId,id:this.id,style:cloneData(this.style),propId:this.propId,propName:this.propName});
    this.style = {...this.style,...style};
    this.propName = props.propName;
    this.propId = props.propId;
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
    let cStyle2 = getStyleObj(cStyle,this.style);
    let resultStyle = {color:cStyle2.color,...cStyle2,textAlign:'left'};
    //console.log(resultStyle);
    return (
        <input name={this.propName} ref='input' id={this.propId} type="text" style={resultStyle} defaultValue={this.value}  key={index}
            onClick={(e)=>{
                e.stopPropagation();
            }} onContextMenu={(e)=>{
                e.stopPropagation();
                e.preventDefault();
                this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
            }} onChange={(e)=>{
                this.value = e.currentTarget.value;
        }}
        />
    )
}