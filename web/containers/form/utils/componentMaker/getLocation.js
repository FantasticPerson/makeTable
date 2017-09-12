/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import {componentLocation} from '../../const'
import {getStyleObj} from '../data-helper'
import {findItem} from '../../../../utils/compatibaleApi'
import moment from 'moment'

export default class locateLocation extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentLocation;
        this.value = recoverData ? recoverData.value:'';
        this.style = recoverData ? recoverData.style : {width1:13,height1:13,width:720,height:30};
        this.getNode = getNode;
        this.getLocation = getLocation;

        this.getLocation();
    }
}

export function getLocation(){
    var geolocation = new BMap.Geolocation();
    var mk;
    var that = this;
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            mk = new BMap.Marker(r.point);
            getAddress(r.point,that);
        }else {
            alert('failed'+this.getStatus());
        }
    });
    //获取地址信息，设置地址label
    function getAddress(point,that){
        var gc = new BMap.Geocoder();
        gc.getLocation(point, function(rs){
            var addComp = rs.addressComponents;
            var address =  addComp.province +  addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
            that.value = address;
            that.afterUpdateStyle();
        });
    }
}

export function getNode(index){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    let style = getStyleObj(cStyle,this.style);
    let cTime = moment().format('YYYY-MM-DD HH:MM');
    // style.width = "";
    // style.height = "";
    console.log(style.fontSize);
    // style.width = this.style.width1;
    // style.height = this.style.height1;

    if(this.value == ''){
        return(
            <div>
                <button>定位中...</button>
            </div>
        )
    } else {
        return (
            <div style={style}
            onContextMenu={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.onContextMenuShow(e.currentTarget,e.pageX,e.pageY);
        }}>
                <div className="true-form-tool-bar-component-location-btn" style={{display: "inline-block"}}></div>
                {'江苏省 南京市 江东北路176号'+'；当前时间：'+cTime}
            </div>
        )
    }
}