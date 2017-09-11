/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import {componentAudio} from '../../const'
import {getStyleObj} from '../data-helper'
import {findItem} from '../../../../utils/compatibaleApi'

export default class audioUploader extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentAudio;
        this.value = recoverData ? recoverData.value:'';
        this.style = recoverData ? recoverData.style : {width1:13,height1:13,width:13,height:13};
        this.getNode = getNode;
        this.onChange = onChange;
    }
}

export function onChange(e){
    var file = e.target.files[0];
    if(file){
        this.value = file.name;
        this.afterUpdateStyle();
    }
}

export function getNode(index){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    if(!this.style.width || this.style.width < 320){
        this.style.width = 320;
    }
    if(!this.style.height || this.style.height < 50){
        this.style.height = 50;
    }
    let sWidth = this.style.width;
    let sHeight = this.style.height;
    // style.width = this.style.width1;
    // style.height = this.style.height1;
    let border = "1px solid"
    let style = getStyleObj(cStyle,this.style);

    return(
        <div style={{width:sWidth+'px',height:sHeight+'px'}}
        onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }}>
            <input type="text" value={this.value} style={{border,...style,width:(sWidth-140)+'px'}}/>
            <a href="javascript:;" className="file" style={{position:'relative',display:'inline-block',marginLeft:'5px',verticalAlign:'middle'}} className="true-form-tool-bar-component-audio-btn">
                <input type="file" name="" id="" accept="audio/*" onChange={this.onChange.bind(this)}/>
            </a>
        </div>
    )
}