import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import DropBoxMaker from './dropBoxMaker'
import {componentCommonWords} from '../../const'
import {getStyleObj} from '../data-helper'
import {findItem} from '../../../../utils/compatibaleApi'

export default class CommonWords extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentCommonWords;
        this.value = '';
        this.style = recoverData ? recoverData.style : {dataArray: ['同意','不同意'], width: 80, height: 42};
        this.getNode = getNode;
    }
}

export function getNode(index){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    let options;
    if(this.style.dataArray){
        options = this.style.dataArray.map((item,index)=>{
            return <option key={index} value={item}>{item}</option>
        });
    }
    let cStyle2 = getStyleObj(cStyle,this.style);
    return (
        <select name={this.propName} id={this.propId} aria-toreplacezname={this.propZname} style={{...cStyle2,textAlign:'left'}} key={index} onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }} onDoubleClick={(e)=>{
            e.stopPropagation();
        }}>{options}</select>
    )
}