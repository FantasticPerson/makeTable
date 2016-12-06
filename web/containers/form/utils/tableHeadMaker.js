/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';

export default class tableHeadMaker extends Object{
    constructor(colSpan,title,styleArr,styleId){
        super();
        this.styleArr = styleArr;
        this.styleId = styleId;
        this.title = title;
        this.colSpan = colSpan;
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
    // return (
        // <tr>
        //     <td colSpan={this.colSpan}>
        //         {this.title}
        //     </td>
        // </tr>
    // );
}