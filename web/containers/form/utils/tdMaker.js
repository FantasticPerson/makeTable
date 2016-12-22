/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react'
import TextMaker from './componentMaker/textMaker'
import TextAreaMaker from './componentMaker/textAreaMaker'
import InputMaker from './componentMaker/inputMaker'
import DropBoxMaker from './componentMaker/dropBoxMaker'
import CheckBoxMaker from './componentMaker/checkBoxMaker'
import RadioBoxMaker from './componentMaker/radioBoxMaker'

import {getStyleObj,cloneData} from './data-helper'
import * as operationTypes from '../utils/history/operationType'
import {componentInput,componentTextArea,componentDropBox,componentTd,componentText,componentCheckBox,componentRadioBox} from '../const'

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
        this.hasChanged = false;
        this.value='';
        this.onContextMenuShow = onContextMenuShow;
        this.onSetStyleConfirm = onSetStyleConfirm;

        this.registerFunc = registerFunc;
        this.registerFunc(functionArray);

        if(recoverData) {
            let components = recoverData.components;
            components.map(item=> {
                if (item.type == componentInput) {
                    this.componentArray.push(new InputMaker(null, this.id, this.styleArr, null, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}, item));
                } else if (item.type == componentTextArea) {
                    this.componentArray.push(new TextAreaMaker(null, this.id, this.styleArr, null, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}, item))
                } else if (item.type == componentDropBox) {
                    this.componentArray.push(new DropBoxMaker(null, this.id, this.styleArr, null, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}, item));
                } else if(item.type == componentText){
                    this.componentArray.push(new TextMaker(null, this.id, this.styleArr, null, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}, item));
                } else if(item.type == componentCheckBox){
                    this.componentArray.push(new CheckBoxMaker(null, this.id, this.styleArr, null, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}, item));
                } else if(item.type == componentRadioBox){
                    this.componentArray.push(new RadioBoxMaker(null, this.id, this.styleArr, null, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}, item));
                }
            })
        }
    }
}

export function registerFunc(functionArray){
    const {onTdClick,onTdContext,onComponentDrop,onComponentContext,afterUpdateStyle,onDeleteComponent,deleteTd,addTd,addNewHistory,addNewCancelHistory} = functionArray;
    this.onTdClick = onTdClick;
    this.onComponentContext = onComponentContext;
    this.onTdContext = onTdContext;
    this.onComponentDrop = onComponentDrop;
    this.afterUpdateStyle = afterUpdateStyle;
    this.onDeleteComponent = onDeleteComponent;
    this.deleteTd = deleteTd;
    this.addTd = addTd;
    this.addNewHistory = addNewHistory;
    this.addNewCancelHistory = addNewCancelHistory;
    this.setComponentStyle = setComponentStyle;
    this.insertComponent = insertComponent;
    this.getNode = getNode;
    this.setStyle = setStyle;
    this.deleteComponent = deleteComponent;
    this.exportData = exportData;
    this.goBack = goBack;
}

export function insertComponent(type,styleArr,styleId){
    let beforeTd = cloneData(this);
    if(type == componentInput){
        this.componentArray.push(new InputMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}));
    } else if(type == componentTextArea){
        this.componentArray.push(new TextAreaMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}))
    } else if(type == componentDropBox){
        this.componentArray.push(new DropBoxMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}));
    } else if(type == componentText){
        this.componentArray.push(new TextMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}));
    } else if(type == componentCheckBox){
        this.componentArray.push(new CheckBoxMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}));
    } else if(type == componentRadioBox){
        this.componentArray.push(new RadioBoxMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}));
    } else {
        return;
    }
    this.addNewHistory(operationTypes.ADD_ITEM,{obj:beforeTd});
}

export function deleteComponent(id){
    let beforeTd = cloneData(this);
    let component = this.componentArray.find((item)=>{
        return item.id == id;
    });
    if(component){
        this.componentArray.splice(this.componentArray.indexOf(component),1);
        this.addNewHistory(operationTypes.DEL_ITEM,{obj:beforeTd});
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

export function setStyle(styleArr,styleId){
    this.styleArr = styleArr;
    if(!this.hasChanged){
        this.styleId = styleId;
    }
    for(let i=0;i<this.componentArray.length;i++){
        this.componentArray[i].setStyle(styleArr);
    }
}

export function onSetStyleConfirm(style,text,item,props){
    if(this.value != text){
        this.value = text;
        if(!this.hasChanged && this.value != ''){
            this.hasChanged = true;
        }
    }
    this.addNewHistory(operationTypes.SET_TD_STYLE,{id:this.id,propName:this.propName,propId:this.propId,style:cloneData(this.style)});
    this.propName = props.name;
    this.propId = props.id;
    this.style = {...this.style,...style};
    this.afterUpdateStyle();
}

export function goBack(data,isCancel=false){
    const {id} = data.data;
    let componentItem = this.componentArray.find((item)=>{
        return item.id == id;
    });
    if(componentItem){
        if(!isCancel){
            this.addNewCancelHistory(data.type,{id:this.id,style:cloneData(this.style)});
        }
        componentItem.goBack(data);
    }
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
        let width = cCol / tCol * tWidth;
        let bgColor = tdIds.indexOf(this.id)>= 0 ? '#eeeeee' : '#ffffff';
        let col = tRow == cRow ? 1 : cCol;
        let row = (cRowFix || cCol == tCol) ? 1 : cRow;
        let style = {};
        style.backgroundColor = bgColor;
        // style.width = width+'px';
        let getStyle = getStyleObj(cStyle,{...this.style});
        style.width = getStyle.width ? getStyle.width : style.width;
        let getStyle2 = {...getStyleObj(cStyle,this.style),...style};
        getStyle2.width = getStyle2.width ? getStyle2.width : Math.ceil(width) - (getStyle2.borderSize+2)+'px';
        const components = this.componentArray.map((item,index)=>{
            return item.getNode(index);
        });
        return (
            <td name={this.propName} id={this.propId} colSpan={col} key={index} rowSpan={row} style={{...getStyle2}} onDoubleClick={(e)=>{
                    this.onTdClick(this.id);
                }} onContextMenu={(e)=>{
                    e.preventDefault();
                    if (bgColor == '#eeeeee') {
                        this.onTdContext({pageX: e.pageX, pageY: e.pageY,id:this.id,deleteTd:this.deleteTd,addTd:this.addTd});
                    } else {
                        this.onContextMenuShow(e.currentTarget, e.pageX, e.pageY);
                    }
                }} onDragOver={(e)=>{
                    e.preventDefault();
                }} onDrop={(e)=>{
                    this.onComponentDrop(this.id,e.dataTransfer.getData("text/plain"));
                }}>{this.value}{components}
            </td>
        )
    }
    return null;
}

