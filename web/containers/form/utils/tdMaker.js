/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';
import TextMaker from './componentMaker/textMaker'
import InputMaker from './componentMaker/inputMaker'
import TextAreaMaker from './componentMaker/textAreaMaker'
import DropBoxMaker from './componentMaker/dropboxMaker'
import {componentText,componentInput,componentTextArea,componentDropBox} from '../const'
import {stringifyRGBAObj} from './data-helper'

export default class tdMaker extends Object{
    constructor(posInfo,id,styleArr,styleId,mockType,functionArray){
        super();
        this.state={choose:false};
        this.id = id;
        this.mockType = mockType;
        this.posInfo=posInfo;
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.componentId = 0;
        this.componentArray = [];

        this.registerFunc = registerFunc;
        this.registerFunc(functionArray);
    }
}

export function registerFunc(functionArray){
    const {onTdClick,onTdContext,onComponentDrop,onComponentContext} = functionArray;
    this.onTdClick = onTdClick;
    this.onComponentContext = onComponentContext;
    this.onTdContext = onTdContext;
    this.onComponentDrop = onComponentDrop;
    this.setComponentStyle = setComponentStyle;
    this.insertComponent = insertComponent;
    this.getNode = getNode;
    this.setStyle = setStyle;
}

export function insertComponent(type,styleArr,styleId){
    if(type == componentText){
        this.componentArray.push(new TextMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentContext))
    } else if(type == componentInput){
        this.componentArray.push(new InputMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentContext))
    } else if(type == componentTextArea){
        this.componentArray.push(new TextAreaMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentContext))
    } else if(type == componentDropBox){
        this.componentArray.push(new DropBoxMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentContext))
    }
}

export function setComponentStyle(id,style){
    let component = this.componentArray.find((item)=>{
        return item.id == id;
    });
    if(component){
        component.setStyle(style);
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
    for(let i=0;i<this.componentArray.length;i++){
        this.componentArray[i].setStyle(styleArr);
    }
}

export function getNode(tdIds,index=0){
    if(this.mockType == 0) {
        let cStyle = this.styleArr.find((item)=>{
            return item.id == this.styleId;
        });
        const {cCol,tCol,cRow,tRow,tWidth,tHeight} = this.posInfo;
        let height = cRow / tRow * tHeight;
        let width = cCol / tCol * tWidth;
        let bgColor = tdIds.indexOf(this.id)>= 0 ? '#eeeeee' : '#ffffff';
        let col = tRow == cRow ? 1 : cCol;
        let row = cCol == tCol ? 1 : cRow;
        let style = {width,height};
        style.border = cStyle.borderSize+'px solid '+stringifyRGBAObj(cStyle.borderColor);
        style.backgroundColor = bgColor;
        style.width = width+'px';
        style.height = height+'px';
        const components = this.componentArray.map((item,index)=>{
            return item.getNode(index);
        });
        return (<td colSpan={col} key={index} rowSpan={row} style={style} onClick={()=>{
                        this.onTdClick(this.id);
                    }} onContextMenu={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        this.onTdContext({pageX:e.pageX, pageY:e.pageY});
                    }} onDragOver={(e)=>{
                        e.preventDefault()
                    }} onDrop={(e)=>{
                        this.onComponentDrop(this.id,e.dataTransfer.getData("text/plain"));
                    }}>
            <div style={{width:(width) + 'px',height:(height)+'px',display:'flex',overflow:'hidden',flexDirection:'row',alignItems:'center'}}>
                {components}
            </div>
        </td>)
    } else {
        return null;
    }
}

