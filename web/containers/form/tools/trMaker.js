/**
 * Created by wdd on 2016/11/24.
 */
import tdMaker from './tdMaker'
import React,{Component,PropTypes} from 'react';

export default class trMaker extends Object{
    constructor(style,tdNum){
        super();
        let tdArr = [];
        for(let i=0;i<tdNum;i++){
            tdArr.push(new tdMaker({},null));
        }
        this.style = style;
        this.setStyle = setStyle;
        this.getNode = getNode;
        this.setContent = setContent;
        this.addTd = addTd;
        this.removeTd = removeTd;
        this.tds = tdArr;
    }
}

export function setStyle(style){}

export function getNode(){
    let nodeArr = [];
    for(let i=0;i<this.tds.length;i++){
        nodeArr.push((this.tds[i]).getNode());
    }
    return (<tr style={{...this.style}}>{nodeArr}</tr>)
}

export function addTd(tdObj){}

export function setContent(){}

export function removeTd(tdObj){}