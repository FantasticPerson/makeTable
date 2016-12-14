/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react'
import InputMaker from './componentMaker/inputMaker'
import DropBoxMaker from './componentMaker/dropboxMaker'
import TextAreaMaker from './componentMaker/textAreaMaker'
import {getStyleObj} from './data-helper'
import {componentInput,componentTextArea,componentDropBox,componentTd} from '../const'

export default class tdMaker extends Object{
    constructor(posInfo,id,styleArr,styleId,mockType,functionArray,dispatch,recoverData) {
        super();
        this.state = {choose: false};
        this.id = recoverData ? recoverData.id : id;
        this.posInfo = recoverData ? recoverData.posInfo : posInfo;
        this.styleArr = styleArr;
        this.style = recoverData ? recoverData.style : {
            height: 60,
            showBorder: [true, true, true, true]
        };
        this.mockType = recoverData ? recoverData.mockType : mockType;
        this.value = recoverData ? recoverData.value : '';
        this.componentId = recoverData ? recoverData.componentId : 0;
        this.dispatch = dispatch;
        this.styleId = styleId;
        this.componentArray = [];
        this.propName = 'default';
        this.propId = ''+this.id;
        this.onContextMenuShow = onContextMenuShow;
        this.onSetStyleConfirm = onSetStyleConfirm;

        this.registerFunc = registerFunc;
        this.registerFunc(functionArray);

        if(recoverData) {
            let components = recoverData.components;
            components.map(item=> {
                if (item.type == componentInput) {
                    this.componentArray.push(new InputMaker(null, this.id, this.styleArr, null, this.onComponentContext, this.onDeleteComponent, item))
                } else if (item.type == componentTextArea) {
                    this.componentArray.push(new TextAreaMaker(null, this.id, this.styleArr, null, this.onComponentContext, this.onDeleteComponent, item))
                } else if (item.type == componentDropBox) {
                    this.componentArray.push(new DropBoxMaker(null, this.id, this.styleArr, null, this.onComponentContext, this.onDeleteComponent, item))
                }
            })
        }
    }
}

export function registerFunc(functionArray){
    const {onTdClick,onTdContext,onComponentDrop,onComponentContext,afterUpdateStyle,onDeleteComponent} = functionArray;
    this.onTdClick = onTdClick;
    this.onComponentContext = onComponentContext;
    this.onTdContext = onTdContext;
    this.onComponentDrop = onComponentDrop;
    this.afterUpdateStyle = afterUpdateStyle;
    this.onDeleteComponent = onDeleteComponent;
    this.setComponentStyle = setComponentStyle;
    this.insertComponent = insertComponent;
    this.getNode = getNode;
    this.setStyle = setStyle;
    this.deleteComponent = deleteComponent;
    this.exportData = exportData;
}

export function insertComponent(type,styleArr,styleId){
    if(type == componentInput){
        this.componentArray.push(new InputMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentContext,this.onDeleteComponent))
    } else if(type == componentTextArea){
        this.componentArray.push(new TextAreaMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentContext,this.onDeleteComponent))
    } else if(type == componentDropBox){
        this.componentArray.push(new DropBoxMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentContext,this.onDeleteComponent))
    }
}

export function deleteComponent(id){
    let component = this.componentArray.find((item)=>{
        return item.id == id;
    });
    if(component){
        this.componentArray.splice(this.componentArray.indexOf(component),1);
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

export function exportData(){
    let componentsData = this.componentArray.map((item)=>{
        return item.exportData();
    });
    return {
        components:componentsData,
        id:this.id,
        mockType:this.mockType,
        styleId:this.styleId,
        style:this.style,
        componentId:this.componentId,
        posInfo:this.posInfo,
        value:this.value
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
    for(let i=0;i<this.componentArray.length;i++){
        this.componentArray[i].setStyle(styleArr);
    }
}

export function onSetStyleConfirm(style,text,item,props){
    if(this.value != text){
        this.value = text;
    }
    this.style = {...this.style,...style};
    this.propName = props.propName;
    this.propId = props.propId;
    this.afterUpdateStyle();
}

export function onContextMenuShow(item,pageX,pageY,component=null) {
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style1 = {
        color:cStyle.color,
        fontFamily:cStyle.fontFamily,
        fontSize:cStyle.fontSize,
        fontStyleArray:cStyle.fontStyleArray,
        textAlign:cStyle.textAlign
    };
    let data = {
        type:componentTd,
        id:this.id,
        tdId:this.tdId,
        pageX:pageX,
        pageY:pageY,
        style:{...style1,...this.style},
        value:this.value,
        onConfirm:this.onSetStyleConfirm.bind(this),
        cTarget:item,
        propName:this.propName,
        propId:this.propId
    };
    if(component && component.value){
        data.value = component.value;
    }
    if(component && component.obj){
        data.cTarget = {item:data.cTarget,nodeData:component.obj};
    }
    this.onComponentContext(data);
}

export function getNode(tdIds,index=0){
    if(this.mockType == 0) {
        let cStyle = this.styleArr.find((item)=>{
            return item.id == this.styleId;
        });
        const {cCol,tCol,cRow,tRow,tWidth,tHeight,cRowFix} = this.posInfo;
        // let height = cRow / tRow * tHeight;
        let width = cCol / tCol * tWidth;
        let bgColor = tdIds.indexOf(this.id)>= 0 ? '#eeeeee' : '#ffffff';
        let col = tRow == cRow ? 1 : cCol;
        let row = (cRowFix || cCol == tCol) ? 1 : cRow;
        let style = {};
        style.backgroundColor = bgColor;
        style.width = width+'px';
        // style.width = cCol /tCol * 100 + '%';
        // style.height = height+'px';
        // style.height = cRow /tRow * 100+'%';
        let getStyle = getStyleObj(cStyle,{...this.style});
        style.width = getStyle.width ? getStyle.width : style.width;
        let getStyle2 = {...getStyleObj(cStyle,this.style),...style};
        const components = this.componentArray.map((item,index)=>{
            return item.getNode(index);
        });
        return (<td name={this.propName} id={this.propId} colSpan={col} key={index} rowSpan={row} style={getStyle2} onDoubleClick={(e)=>{
                    this.onTdClick(this.id);
                }} onContextMenu={(e)=>{
                    e.preventDefault();
                    if(e.component){
                        this.onContextMenuShow(e.currentTarget, e.pageX, e.pageY,e.component);
                    } else {
                        if (bgColor == '#eeeeee') {
                            this.onTdContext({pageX: e.pageX, pageY: e.pageY});
                        } else {
                            this.onContextMenuShow(e.currentTarget, e.pageX, e.pageY);
                        }
                    }
                    e.component = null;
                }} onDragOver={(e)=>{
                    e.preventDefault()
                }} onDrop={(e)=>{
                    this.onComponentDrop(this.id,e.dataTransfer.getData("text/plain"));
                }}>{this.value}{components}
        </td>)
    }
    return null;
}

