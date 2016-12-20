/**
 * Created by wdd on 2016/12/20.
 */
import {cloneData} from '../../data-helper'
import * as optionTypes from '../../history/operationType'
import {componentText,componentCheckBox,componentRadioBox} from '../../../const'

export default class ComponentMaker extends Object{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super();
        this.id = recoverData ? recoverData.id : id;
        this.tdId = tdId;
        this.styleId = recoverData ? recoverData.styleId : styleId;
        this.styleArr = styleArr;
        this.propId = ''+this.tdId+this.id;
        this.propName = 'default';
        this.registerFunc = registerFunc;
        this.registerFunc(funcArray);
    }
}

export function registerFunc(funcArray){
    const {onComponentClick,onDelete,afterUpdateStyle,addHistoryItem,addNewCancelHistory} = funcArray;
    this.onContextMenu = onComponentClick;
    this.onDelete = onDelete;
    this.afterUpdateStyle = afterUpdateStyle;
    this.addHistoryItem = addHistoryItem;
    this.addNewCancelHistory = addNewCancelHistory;
    this.setStyle = setStyle;
    this.goBack = goBack;
    this.onSetStyleConfirm = onSetStyleConfirm;
    this.onContextMenuShow = onContextMenuShow;
    this.exportData = exportData;
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
}

export function goBack(data,isCancel=false){
    if(!isCancel) {
        this.addNewCancelHistory(optionTypes.ITEM_SET_STYLE, {
            tdId: this.tdId,
            id: this.id,
            style: cloneData(this.style),
            propName: this.propName,
            propId: this.propId
        });
    }
    const {style,propName,propId} = data.data;
    this.propName = propName;
    this.propId = propId;
    this.style = style;
    this.afterUpdateStyle();
}

export function onSetStyleConfirm(style,item,props,value){
    this.addHistoryItem(optionTypes.ITEM_SET_STYLE, {
        tdId: this.tdId,
        id: this.id,
        style: cloneData(this.style),
        propId: this.propId,
        propName: this.propName,
        value:this.value
    });
    if(this.type == componentText || this.type == componentCheckBox || this.type == componentRadioBox){
        this.value = value;
    }
    this.style = {...this.style,...style};
    this.propName = props.name;
    this.propId = props.id;
    this.afterUpdateStyle();
}

export function onContextMenuShow(item,pageX,pageY){
    console.log(this.type);
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
    let style1 = {
        color:cStyle.color,
        fontFamily:cStyle.fontFamily,
        fontSize:cStyle.fontSize,
        fontStyleArray:cStyle.fontStyleArray
    };
    this.onContextMenu({
        id:this.id,
        tdId:this.tdId,
        type:this.type,
        pageX:pageX,
        pageY:pageY,
        style:{...style1,...this.style},
        value:this.value,
        onConfirm:this.onSetStyleConfirm.bind(this),
        onDelete:this.onDelete,
        cTarget:item,
        propName:this.propName,
        propId:this.propId
    });
}

export function exportData(){
    return {
        tdId:this.tdId,
        id:this.id,
        type:this.type,
        style:this.style,
        styleId:this.styleId,
        value:this.value
    };
}