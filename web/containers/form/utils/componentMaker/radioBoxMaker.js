/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import {componentRadioBox} from '../../const'
import {getStyleObj} from '../data-helper'

export default class RadioBoxMaker extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentRadioBox;
        this.value = recoverData?recoverData.value:"编辑";
        this.style = recoverData ? recoverData.style : {width1:13,height1:13,width:50,height:25};
        this.getNode = getNode;
    }
}

export function getNode(index){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style = getStyleObj(cStyle,this.style);
    return [
        <input type="radio" name={this.propName} id={this.propId} style={{width:this.style.width1,height:this.style.height1}} key={index} onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }} onDoubleClick={(e)=>{
            e.stopPropagation();
        }}/>,
        <input type="input" key={index+0.1} style={{...style,borderWidth:'0',textAlign:'center'}} value={this.value} disabled="disabled"
        onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }} onDoubleClick={(e)=>{
            e.stopPropagation();
        }}/>
    ]
}