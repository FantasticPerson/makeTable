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
import {findItem} from '../../../utils/compatibaleApi'
import * as operationTypes from '../utils/history/operationType'
import {componentInput,componentTextArea,componentDropBox,componentTd,componentText,componentCheckBox,componentRadioBox} from '../const'

export default class tdMaker extends Object{
    constructor(posInfo,id,styleArr,styleId,mockType,functionArray,dispatch,setRowHeight,setColWidth,recoverData) {
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
        this.valueIndex = (recoverData && recoverData.hasOwnProperty('valueIndex')) ? recoverData.valueIndex : 0;
        this.componentId = recoverData ? recoverData.componentId : 0;
        this.dispatch = dispatch;
        this.styleId = styleId;
        this.setRowHeight = setRowHeight;
        this.setColWidth = setColWidth;
        this.componentArray = [];
        this.propName = 'default';
        this.propId = ''+this.id;
        this.hasChanged = false;
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
    this.setCommonWidth = setCommonWidth;
    this.setCommonHeight = setCommonHeight;
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
        // this.componentArray.push(new TextMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}));
    } else if(type == componentCheckBox){
        this.componentArray.push(new CheckBoxMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}));
    } else if(type == componentRadioBox){
        this.componentArray.push(new RadioBoxMaker(this.componentId++, this.id, this.styleArr, styleId, {onComponentClick:this.onComponentContext, onDelete:this.onDeleteComponent,afterUpdateStyle:this.afterUpdateStyle,addHistoryItem:this.addNewHistory,addNewCancelHistory:this.addNewCancelHistory}));
    } else {
        return;
    }
    if(type != componentText) {
        this.addNewHistory(operationTypes.ADD_ITEM, {obj: beforeTd});
    }
}

export function deleteComponent(id){
    let beforeTd = cloneData(this);
    let component = findItem(this.componentArray,'id',id);
    if(component){
        this.componentArray.splice(this.componentArray.indexOf(component),1);
        this.addNewHistory(operationTypes.DEL_ITEM,{obj:beforeTd});
    }
}

export function setComponentStyle(id,style){
    let component = findItem(this.componentArray,'id',id);
    if(component){
        component.setStyle(style);
    }
}

export function setCommonWidth(width){
    this.style.width = width;
}

export function setCommonHeight(height){
    this.style.height = height;
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
        value:this.value,
        valueIndex:this.valueIndex
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
    let beforeTd = cloneData(this);
    if(this.value != text){
        this.value = text;
        if(!this.hasChanged && this.value != ''){
            this.hasChanged = true;
        }
    }
    this.valueIndex = props.valueIndex;
    this.addNewHistory(operationTypes.SET_TD_STYLE,{obj:beforeTd});
    this.style = {...this.style,...style};
    if(this.style.width1){
        this.setColWidth(this.id,this.style.width1);
        this.style.width1 = null;
    }
    if(this.style.height1){
        this.setRowHeight(this.id,this.style.height1);
        this.style.height1 = null;
    }

    this.afterUpdateStyle();
}

export function goBack(data,isCancel=false){
    const {id} = data.data;
    let componentItem = findItem(this.componentArray,'id',id);
    if(componentItem){
        if(!isCancel){
            this.addNewCancelHistory(data.type,{id:this.id,style:cloneData(this.style)});
        }
        componentItem.goBack(data);
    }
}

export function onContextMenuShow(item,pageX,pageY,component=null) {
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    let style1 = {
        color:cStyle.color,
        fontFamily:cStyle.fontFamily,
        fontSize:cStyle.fontSize,
        fontStyleArray:cStyle.fontStyleArray,
        textAlign:cStyle.textAlign,
        verticalAlign:cStyle.verticalAlign
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
        propId:this.propId,
        valueIndex:this.valueIndex
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
        let cStyle = findItem(this.styleArr,'id',this.styleId);
        const {cCol,tCol,cRow,tRow,tWidth,tHeight,cRowFix} = this.posInfo;
        let width = (Math.ceil(tWidth/tCol) - 3) * cCol;
        let bgColor = tdIds.indexOf(this.id)>= 0 ? '#eeeeee' : '#ffffff';
        let col = tRow == cRow ? 1 : cCol;
        let row = (cRowFix || cCol == tCol) ? 1 : cRow;
        let style = {};
        style.backgroundColor = bgColor;
        let getStyle = getStyleObj(cStyle,{...this.style});
        style.width = getStyle.width ? getStyle.width : style.width;
        let getStyle2 = {...getStyleObj(cStyle,this.style),...style};
        getStyle2.width = getStyle2.width ? getStyle2.width :width+'px';
        let components = this.componentArray.map((item,index)=>{
            return item.getNode(index);
        });
        let valueArr = this.value.replace(/ /g,String.fromCharCode(160)).split(/\n/);
        let valueLength = valueArr.length;
        for(let i=1;i<valueLength;i++){
            valueArr.splice(2*i-1,0,<br/>);
        }
        components.splice(this.valueIndex,0,valueArr);
        return (
            <td colSpan={col} key={index} rowSpan={row} style={getStyle2} onDoubleClick={(e)=>{
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
                }}>{components}
            </td>
        )
    }
    return null;
}

