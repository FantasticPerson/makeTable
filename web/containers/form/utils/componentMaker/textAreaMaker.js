/**
 * Created by wdd on 2016/12/20.
 */
import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import {componentTextArea} from '../../const'
import {getStyleObj} from '../data-helper'
import {findItem} from '../../../../utils/compatibaleApi'

export default class TextAreaMaker extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentTextArea;
        this.style = recoverData ? recoverData.style : {width:120,height:50};
        this.value = recoverData ? recoverData.value : "";
        this.getNode = getNode;
    }
}

export function getNode(index){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    let cStyle2 = getStyleObj(cStyle,this.style);
    return (
        <textarea name={this.propName} id={this.propId} aria-toreplacezname={this.propZname} ref='textArea' style={{...cStyle2,textAlign:'left',resize:'none',verticalAlign:'middle'}} defaultValue={this.value} key={index}
            onChange={(e)=>{
                this.value = e.currentTarget.value;
            }}
            onClick={(e)=>{
                e.stopPropagation();
            }} onContextMenu={(e)=>{
                e.stopPropagation();
                e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
            }} onDoubleClick={(e)=>{
                e.stopPropagation();
            }}/>
    )
}