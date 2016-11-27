/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';

export default class tdMaker extends Object{
    constructor(posInfo,id,style,mockType,onTdClick,content){
        super();
        this.style = style;
        this.pStyle = {border:'1px solid'};
        this.id = id;
        this.posInfo=posInfo;
        this.mockType = mockType;//0:not mock;1:col;2:row;3:row&col
        this.getNode = getNode;
        this.state={choose:false};
        this.onTdClick = onTdClick;
    }
}

export function getNode(tbInfo,index=0){
    if(this.mockType == 0) {
        const {choose} = this.state;
        const {cols,rows} = tbInfo;
        const {cCol,tCol,cRow,tRow} = this.posInfo;
        let height = cRow / tRow * 100 + '%';
        let width = cCol / tCol * 100 + '%';
        let style = {width,height,...this.pStyle};
        let bgColor = choose ? '#eeeeee' : '#ffffff';
        return (<td colSpan={cCol} key={index} rowSpan={cRow} style={{...style,backgroundColor:bgColor}} onClick={()=>{
            this.onTdClick(this.id);
        }}>{this.content}</td>)
    }

    return null;
}

