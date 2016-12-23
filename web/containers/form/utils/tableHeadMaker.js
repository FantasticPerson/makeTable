/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';
import {getStyleObj} from './data-helper'
import {findItem} from '../../../utils/compatibaleApi'
import {componentTd} from '../const'

export default class tableHeadMaker extends Object{
    constructor(colSpan,title,styleArr,styleId,onComponentContext,afterUpdateStyle,recoverData){
        super();
        if(!recoverData) {
            this.styleArr = styleArr;
            this.styleId = styleId;
            this.style = {textAlign: 'center', height: '66',fontSize: 32,fontStyleArray:[true,false]};
            this.title = '右击编辑内容';
            this.colSpan = colSpan;
            this.onComponentContext = onComponentContext;
            this.afterUpdateStyle = afterUpdateStyle;
            this.onContextMenuShow = onContextMenuShow;
            this.onSetStyleConfirm = onSetStyleConfirm;
            this.getNode = getNode;
            this.setStyle = setStyle;
            this.exportData = exportData;
        } else {
            this.styleArr = styleArr;
            this.styleId = recoverData.styleId;
            this.style = recoverData.style;
            this.title = recoverData.title;
            this.colSpan = colSpan;
            this.onComponentContext = onComponentContext;
            this.afterUpdateStyle = afterUpdateStyle;
            this.onContextMenuShow = onContextMenuShow;
            this.onSetStyleConfirm = onSetStyleConfirm;
            this.getNode = getNode;
            this.setStyle = setStyle;
            this.exportData = exportData;
        }
        this.propName = 'default';
        this.propId = ''+this.id;
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function onContextMenuShow(item,pageX,pageY) {
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    let style1 = {
        color:cStyle.color,
        fontSize:cStyle.fontSize,
        fontFamily:cStyle.fontFamily,
        fontStyle:cStyle.fontStyle,
        textAlign:cStyle.textAlign
    };
    this.onComponentContext({
        type:componentTd,
        id:this.id,
        tdId:this.tdId,
        pageX:pageX,
        pageY:pageY,
        style:{...style1,...this.style},
        value:this.title,
        propName:this.propName,
        propId:this.propId,
        onConfirm:this.onSetStyleConfirm.bind(this),
        cTarget:{nodeData:item}
    });
}

export function onSetStyleConfirm(style,text,item,props){
    if(this.title != text){
        this.title = text;
    }
    this.style = {...this.style,...style};
    this.propName = props.propName;
    this.propId = props.propId;
    this.afterUpdateStyle();
}

export function exportData(){
    return {
        styleId:this.styleId,
        title:this.title,
        style:this.style
    }
}

export function getNode(){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    let getStyle = getStyleObj(cStyle,this.style);
    if(this.style.fontStyleArray[0]){
        getStyle.fontWeight = 'bold';
    } else {
        getStyle.fontWeight = 'normal';
    }
    if(this.style.fontStyleArray[1]){
        getStyle.fontStyle = 'italic';
    } else {
        getStyle.fontStyle = 'normal';
    }
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