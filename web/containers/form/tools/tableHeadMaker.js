/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';

export default class tableHeadMaker extends Object{
    constructor(style,title){
        super();
        this.style = style;
        this.title = title;
        this.getNode = getNode;
    }
}

export function setStyle(style){
    this.style = style;
}

export function setTitle(title){
    this.title = title;
}

export function getNode(){
    return (<thead style={{...this.style}}><tr><th style={{colspan:'3'}}>{this.title}</th></tr></thead>)
}