/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'

export default class DropBoxMaker extends Object{
    constructor(id,tdId,styleArr,styleId,onComponentClick){
        super();
        this.tdId = tdId;
        this.id = id;
        this.type = 'dropBox';
        this.style = {};
        this.onContextMenu = onComponentClick;
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.groupData = [{value:'inValid',text:'右击编辑内容'}];
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function getNode(index){
    let options = this.groupData.map((item,index)=>{
        return <option key={index} value={item.value}>{item.text}</option>
    });
    return (
        <section style={{...this.style}} key={index} onClick={(e)=>{e.stopPropagation()}} onContextMenu={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.onContextMenu({type:this.type,id:this.id,tdId:this.tdId,pageX:e.pageX,pageY:e.pageY});
        }}>{options}</section>
    )
}