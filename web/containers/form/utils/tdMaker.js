/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';
import TextMaker from './componentMaker/textMaker'
import InputMaker from './componentMaker/inputMaker'
import TextAreaMaker from './componentMaker/textAreaMaker'
import DropBoxMaker from './componentMaker/dropboxMaker'

export default class tdMaker extends Object{
    constructor(posInfo,id,styleArr,styleId,mockType,onTdClick,onRightClick,onComponentDrop,onComponentClick,content){
        super();
        this.styleArr = styleArr;
        this.pStyle = {border:'1px solid'};
        this.id = id;
        this.componentId = 0;
        this.posInfo=posInfo;
        this.mockType = mockType;//0:not mock;1:col;2:row;3:row&col
        this.state={choose:false};
        this.onTdClick = onTdClick;
        this.onComponentClick = onComponentClick;
        this.onRightClick = onRightClick;
        this.onComponentDrop = onComponentDrop;
        this.insertComponent = insertComponent;
        this.componentArray = [];
        this.getNode = getNode;
        this.setStyle = setStyle;
        this.setComponentStyle = setComponentStyle;
        this.styleId = styleId;
    }
}

export function insertComponent(type,styleArr,styleId){
    if(type == 'text'){
        this.componentArray.push(new TextMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentClick))
    } else if(type == 'input'){
        this.componentArray.push(new InputMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentClick))
    } else if(type == 'textArea'){
        this.componentArray.push(new TextAreaMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentClick))
    } else if(type == 'dropBox'){
        this.componentArray.push(new DropBoxMaker(this.componentId++,this.id,styleArr,styleId,this.onComponentClick))
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
        let color = cStyle.borderColor;
        style.border = cStyle.borderSize+'px solid '+'rgba('+ color.r+','+color.g+','+color.b+','+color.a+')';
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
                        this.onRightClick({clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY,pageX:e.pageX,pageY:e.pageY});
                    }} onDragOver={(e)=>{
                        e.preventDefault()
                    }} onDrop={(e)=>{
                        this.onComponentDrop(this.id,e.dataTransfer.getData("text/plain"));
                    }}
        ><div style={{width:(width) + 'px',height:(height)+'px',display:'flex',overflow:'hidden',flexDirection:'row',alignItems:'center'}}>{components}</div></td>)
    } else {
        return null;
    }
}

