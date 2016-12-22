/**
 * Created by wdd on 2016/12/20.
 */
import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import {componentInput} from '../../const'
import {getStyleObj,setItemStyle,cloneData} from '../data-helper'

export default class InputMaker extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentInput;
        this.style = recoverData ? recoverData.style : {width:120,height:26};
        this.value = recoverData ? recoverData.value : "";
        this.getNode = getNode;
    }
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let cStyle2 = getStyleObj(cStyle,this.style);
    let resultStyle = {color:cStyle2.color,...cStyle2,textAlign:'left'};
    return (
        <input name={this.propName} aria-toreplacezname={this.propZname} ref='input' id={this.propId} type="text" style={resultStyle} defaultValue={this.value}  key={index}
               onClick={(e)=>{
                   e.stopPropagation();
               }} onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }} onChange={(e)=>{
            this.value = e.currentTarget.value;
        }} onDoubleClick={(e)=>{
            e.stopPropagation();
        }}/>
    )
}