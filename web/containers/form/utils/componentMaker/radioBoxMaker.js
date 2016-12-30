/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import {componentRadioBox} from '../../const'
import {getStyleObj} from '../data-helper'
import {findItem} from '../../../../utils/compatibaleApi'

export default class RadioBoxMaker extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentRadioBox;
        this.value = recoverData?recoverData.value:"编辑";
        this.style = recoverData ? recoverData.style : {width1:13,height1:13,width:13,height:13};
        this.getNode = getNode;
    }
}

export function getNode(index){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    let style = getStyleObj(cStyle,this.style);
    // style.width = this.style.width1;
    // style.height = this.style.height1;
    return [
        <input type="radio" name={this.propName} value={this.value} id={this.propId} aria-toreplacezname={this.propZname} style={style} key={index} onClick={(e)=>{
            e.stopPropagation()
        }} onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }} onDoubleClick={(e)=>{
            e.stopPropagation();
        }}/>,this.value
    ]
}