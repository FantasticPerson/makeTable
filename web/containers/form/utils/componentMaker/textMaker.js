/**
 * Created by wdd on 2016/12/20.
 */
import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import {componentText} from '../../const'
import {getStyleObj,findItem} from '../data-helper'

export default class TextMaker1 extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentText;
        this.value = recoverData ? recoverData.value : "右击编辑";
        this.style = recoverData ? recoverData.style : {width:120,height:26};
        this.getNode = getNode;
    }
}

export function getNode(index){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    // let cStyle = this.styleArr.find((item)=>{
    //     return item.id == this.styleId;
    // });
    let cStyle2 = getStyleObj(cStyle,this.style);
    let resultStyle = {color:cStyle2.color,...cStyle2,textAlign:'left'};
    return (
        <textarea name={this.propName} disabled="disabled" ref='input' id={this.propId} type="text" style={{...resultStyle,borderWidth:'0',textAlign:'center',resize:'none',verticalAlign:'middle',overflow:'hidden'}} value={this.value}  key={index}
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
        }}
        />
    )
}