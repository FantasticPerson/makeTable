/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'

export default class TextMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'checkBox';
        this.style = {};
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function getNode(index,isRelease){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style = {color:cStyle.fontColor,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize};
    return (
        <input type="checkbox" style={{...style,...this.style}} key={index} onClick={(e)=>{e.stopPropagation()}} onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY});
        }}/>
    )
}