/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react'
import TextMaker from './componentMaker/textMaker'
import InputMaker from './componentMaker/inputMaker'
import DropBoxMaker from './componentMaker/dropboxMaker'
import TextAreaMaker from './componentMaker/textAreaMaker'
import {stringifyRGBAObj,getStyleObj} from './data-helper'
import {componentText,componentInput,componentTextArea,componentDropBox,componentTd} from '../const'

export default class tdMaker extends Object{
    constructor(posInfo,id,styleArr,styleId,mockType,functionArray,dispatch){
        super();
        this.state={choose:false};
        this.id = id;
        this.mockType = mockType;
        this.posInfo=posInfo;
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.style = {textAlign:'center',height:'60',showBorder:[true,true,true,true]};
        this.componentId = 0;
        this.componentArray = [];
        this.dispatch = dispatch;
        this.value = '';

        this.onContextMenuShow = onContextMenuShow;
        this.onSetStyleConfirm = onSetStyleConfirm;

        this.registerFunc = registerFunc;
        this.registerFunc(functionArray);
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
}

export function insertComponent(type,styleArr,styleId){
    if(type == componentText){
        this.componentArray.push(new TextMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentContext,this.onDeleteComponent,this.style))
    } else if(type == componentInput){
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

export function setStyle(styleArr){
    this.styleArr = styleArr;
    for(let i=0;i<this.componentArray.length;i++){
        this.componentArray[i].setStyle(styleArr);
    }
}

export function onSetStyleConfirm(style,text,item){
    if(this.value != text){
        this.value = text;
    }
    this.style = {...this.style,...style};


    // if(item.nodeData){
    //     this.componentArray.map(item=>{
    //         item.setTdStyle(this.style);
    //     });
        // item.nodeData.setTdStyle(this.style);
        // item.nodeData.setValue(text);
    // }
    this.afterUpdateStyle();
    // item.innerHTML = text;
}

export function onContextMenuShow(item,pageX,pageY,component=null) {
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style1 = {color:cStyle.fontColor,fontFamily:cStyle.fontFamily,fontSize:cStyle.fontSize};
    let data = {
        type:componentTd,
        id:this.id,
        tdId:this.tdId,
        pageX:pageX,
        pageY:pageY,
        style:{...style1,...this.style},
        value:this.value,
        onConfirm:this.onSetStyleConfirm.bind(this),
        cTarget:item
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
        // style.border = cStyle.borderSize+'px solid '+stringifyRGBAObj(cStyle.borderColor);
        style.backgroundColor = bgColor;
        style.width = width+'px';
        // style.width = cCol /tCol * 100 + '%';
        // style.height = height+'px';
        // style.height = cRow /tRow * 100+'%';
        const {showBorder} = this.style;
        if(showBorder[0]) {
            style.borderTop = cStyle.borderSize + 'px solid ' + stringifyRGBAObj(cStyle.borderColor);
        } else {
            style.borderTopWidth = 0;
        }
        if(showBorder[1]) {
            style.borderBottom = cStyle.borderSize + 'px solid ' + stringifyRGBAObj(cStyle.borderColor);
        } else {
            style.borderBottomWidth = 0;
        }
        if(showBorder[2]) {
            style.borderLeft = cStyle.borderSize + 'px solid ' + stringifyRGBAObj(cStyle.borderColor);
        } else{
            style.borderLeftWidth = 0;
        }
        if(showBorder[3]) {
            style.borderRight = cStyle.borderSize + 'px solid ' + stringifyRGBAObj(cStyle.borderColor);
        }else {
            style.borderRightWidth = 0;
        }
        // console.log(style);
        let getStyle = getStyleObj(cStyle,this.style);
        style.width = getStyle.width ? getStyle.width : style.width;
        let getStyle2 = {...getStyleObj(cStyle,this.style),...style};

        console.log(getStyle);
        const components = this.componentArray.map((item,index)=>{
            return item.getNode(index);
        });
        return (<td colSpan={col} key={index} rowSpan={row} style={getStyle2} onClick={(e)=>{
                    this.onTdClick(this.id);
                    /*if(e.component){
                        this.dispatch(showOverLayByName(OverLayNames.COMPONENT_CLICK_CONFIRM_MODAL,{
                            cb:function(num){
                                this.dispatch(removeOverLayByName(OverLayNames.COMPONENT_CLICK_CONFIRM_MODAL));
                                if(num == 2){
                                    const {obj,node} = e.component;
                                    obj.onClickShow(node);
                                } else {
                                    this.onTdClick(this.id);
                                }
                                e.component = null;
                            }.bind(this),
                            data:e
                        }))
                    } else {
                        this.onTdClick(this.id);
                    }*/
                    }} onContextMenu={(e)=>{
                        e.preventDefault();
                        {/*e.stopPropagation();*/}
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
                        /*if(e.component){
                            this.dispatch(showOverLayByName(OverLayNames.COMPONENT_CLICK_CONFIRM_MODAL,{
                                cb:function(num){
                                    this.dispatch(removeOverLayByName(OverLayNames.COMPONENT_CLICK_CONFIRM_MODAL));
                                    if(num == 2){
                                        const {obj,node,pageX,pageY} = e.component;
                                        obj.onContextMenuShow(node,pageX,pageY);
                                    } else {
                                        const {pageX,pageY} = e.component;
                                        this.onTdContext({pageX, pageY});
                                    }
                                    e.component = null;
                                }.bind(this),
                                data:e
                            }));
                        } else {
                            this.onTdContext({pageX: e.pageX, pageY: e.pageY});
                        }*/
                    }} onDragOver={(e)=>{
                        e.preventDefault()
                    }} onDrop={(e)=>{
                        this.onComponentDrop(this.id,e.dataTransfer.getData("text/plain"));
                    }}>{this.value}{components}
        </td>)
    }
    return null;
}

