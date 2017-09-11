import React,{Component,PropTypes} from 'react'
import ComponentMaker from './baseComponent/componentMaker'
import {componentDate} from '../../const'
import {getStyleObj} from '../data-helper'
import {findItem} from '../../../../utils/compatibaleApi'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';


export default class DatePlugin extends ComponentMaker{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super(id,tdId,styleArr,styleId,funcArray,recoverData);
        this.type = componentDate;
        this.getNode = getNode;
        this.style = recoverData ? recoverData.style : {width: 80};
        // console.log(_moment2.default());
        console.log(moment.default);
        this.startDate = moment();
        this.onDateChange = onDateChange;
    }
}

export function onDateChange(date){
    this.startDate = date;
    this.afterUpdateStyle();
}

export function getNode(){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    if(!this.style.width || this.style.width < 120){
        this.style.width = 120;
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
    return (
        <div className="dataPlugin" style={{width:'140px',height:'30px'}}>
            <DatePicker calendarClassName={'calendarClassName'} selected={this.startDate}
                onChange={this.onDateChange.bind(this)}
            > 
            </DatePicker>
            <div className="true-form-tool-bar-component-canlender-btn" style={
                {
                    display:'inline-block',
                    verticalAlign:'bottom',
                    marginLeft:'8px',
                }}></div>            
        </div>
    )
}