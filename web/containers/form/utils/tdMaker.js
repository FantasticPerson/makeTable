/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';
import textMaker from './textMaker'

export default class tdMaker extends Object{
    constructor(posInfo,id,style,mockType,onTdClick,onRightClick,onComponentDrop,onComponentClick,content){
        super();
        this.style = style;
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
    }
}

export function insertComponent(type){
    if(type == 'text'){
        this.componentArray.push(new textMaker(this.componentId++,this.id,'text',{},this.onComponentClick))
    }
}

export function setComponentStyle(id,style){
    let component = this.componentArray.find((item)=>{
        return item.id == id;
    })
    if(component){
        console.log('td setCompomemt style')
        component.setStyle(style)
    }
}

export function setStyle(style){
    this.style = style;
}

export function getNode(tdIds,index=0){
    if(this.mockType == 0) {
        const {cCol,tCol,cRow,tRow} = this.posInfo;
        let height = cRow / tRow * 100 + '%';
        let width = cCol / tCol * 100 + '%';
        let bgColor = tdIds.indexOf(this.id)>= 0 ? '#eeeeee' : '#ffffff';
        let col = tRow == cRow ? 1 : cCol;
        let row = cCol == tCol ? 1 : cRow;
        let style = {width,height};
        let color = this.style.borderColor;
        style.border = this.style.borderSize+'px solid '+'rgba('+ color.r+','+color.g+','+color.b+','+color.a+')';
        style.backgroundColor = bgColor;
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
        ><div style={{width:'100%',height:'100%'}}>{components}</div></td>)
    } else {
        return null;
    }
}

