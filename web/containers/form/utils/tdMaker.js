/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';
import {showOverLayByName} from '../../../actions/view'
import {overLayMap} from '../../../constants/OverLayNames'

export default class tdMaker extends Object{
    constructor(posInfo,id,style,mockType,onTdClick,onRightClick,content){
        super();
        this.style = style;
        this.pStyle = {border:'1px solid'};
        this.id = id;
        this.posInfo=posInfo;
        this.mockType = mockType;//0:not mock;1:col;2:row;3:row&col
        this.getNode = getNode;
        this.state={choose:false};
        this.onTdClick = onTdClick;
        this.onRightClick = onRightClick;
        // this.onTdClickHandler = onTdClickHandler;
    }
}

// export function onTdClickHandler(){
//     const {choose} = this.state;
//     this.setState({choose:!choose});
//     this.onTdClick(this.id);
// }

export function getNode(tdIds,index=0){
    if(this.mockType == 0) {
        const {choose} = this.state;
        const {cCol,tCol,cRow,tRow} = this.posInfo;
        let height = cRow / tRow * 100 + '%';
        let width = cCol / tCol * 100 + '%';
        let style = {width,height,...this.pStyle};
        let bgColor = tdIds.indexOf(this.id)>= 0 ? '#eeeeee' : '#ffffff';
        let col = tRow == cRow ? 1 : cCol;
        let row = cCol == tCol ? 1 : cRow;
        return (<td colSpan={col} key={index} rowSpan={row} style={{...style,backgroundColor:bgColor}}
                    onClick={()=>{
                        {/*this.onTdClickHandler();*/}
                        this.onTdClick(this.id);
                    }} onContextMenu={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        this.onRightClick({clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY,pageX:e.pageX,pageY:e.pageY});
                    }}
        >{this.content}</td>)
    } else {
        return null;
    }

}

