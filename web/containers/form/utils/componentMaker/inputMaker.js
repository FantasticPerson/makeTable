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
        this.style = recoverData ? recoverData.style : {width:120,height:25.33};
        this.value = recoverData ? recoverData.value : "点击编辑内容";
        this.propName = 'default';
        this.propId = ''+this.tdId+this.id;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function onSetStyleConfirm(style,item,props){
    console.log(style);
    setItemStyle(item,style);
    this.style = {...this.style,...style};
    this.propName = props.propName;
    this.propId = props.propId;
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

export function onClickShow(item){
    item.focus();
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
    return (
        <input name={this.propName} id={this.propId} type="text" style={{...cStyle2,textAlign:'left'}} defaultValue={this.value}  key={index}
            onClick={(e)=>{
                e.stopPropagation();
            }} onContextMenu={(e)=>{
                e.stopPropagation();
                e.preventDefault();
                this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
            }}
        />
    )
}