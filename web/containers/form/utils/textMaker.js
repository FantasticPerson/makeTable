/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'

export default class TextMaker extends Object{
    constructor(id,type,style){
        super();
        this.id = id;
        this.type = type;
        this.style = style;
        this.getNode = getNode;
    }
}

export function getNode(index){
    return (
        <input type="text" key={index} onClick={(e)=>{e.stopPropagation()}}/>
    )
}