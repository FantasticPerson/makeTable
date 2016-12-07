/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';
import {getStyleObj} from './data-helper'
import {componentTd} from '../const'

export default class tableHeadMaker extends Object{
    constructor(colSpan,title,styleArr,styleId,onComponentContext,afterUpdateStyle){
        super();
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.style = {textAlign:'center',height:'66',fontWeight:'bold',fontSize:'32'};
        this.title = '右击编辑内容';
        this.colSpan = colSpan;
        this.onComponentContext = onComponentContext;
        this.afterUpdateStyle = afterUpdateStyle;
        this.onContextMenuShow = onContextMenuShow;
        this.onSetStyleConfirm = onSetStyleConfirm;
        this.getNode = getNode;
        this.setStyle = setStyle;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function onContextMenuShow(item,pageX,pageY) {
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style1 = {color:cStyle.fontColor,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize};
    this.onComponentContext({
        type:componentTd,
        id:this.id,
        tdId:this.tdId,
        pageX:pageX,
        pageY:pageY,
        style:{...style1,...this.style},
        value:this.title,
        onConfirm:this.onSetStyleConfirm.bind(this),
        cTarget:item
    });
}

export function onSetStyleConfirm(style,text,item){
    if(this.title != text){
        this.title = text;
    }
    this.style = {...this.style,...style};
    this.afterUpdateStyle();
}

export function getNode(){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let getStyle = getStyleObj(cStyle,this.style);
    return (
        <tr>
            <td style={getStyle} colSpan={this.colSpan} onContextMenu={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
            }}>
                {this.title}
            </td>
        </tr>
    );
}