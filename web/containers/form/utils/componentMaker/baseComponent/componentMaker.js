/**
 * Created by wdd on 2016/12/20.
 */
import {cloneData} from '../../data-helper'
import * as optionTypes from '../../history/operationType'
import {componentText,componentCheckBox,componentRadioBox} from '../../../const'
import {findItem} from '../../../../../utils/compatibaleApi'

export default class ComponentMaker extends Object{
    constructor(id,tdId,styleArr,styleId,funcArray,recoverData){
        super();
        this.id = recoverData ? recoverData.id : id;
        this.tdId = tdId;
        this.styleId = recoverData ? recoverData.styleId : styleId;
        this.styleArr = styleArr;
        this.propId = recoverData ? recoverData.propId : ''+this.tdId+this.id;
        this.propName = recoverData ? recoverData.propName : 'default';
        this.propZname = recoverData ? recoverData.propZname : 'default';
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

export function setStyle(styleArr,styleId){
    this.styleArr = styleArr;
    this.styleId = styleId;
}

export function goBack(data,isCancel=false){
    if(!isCancel) {
        this.addNewCancelHistory(optionTypes.ITEM_SET_STYLE, {
            tdId: this.tdId,
            id: this.id,
            style: cloneData(this.style),
            propName: this.propName,
            propId: this.propId,
            propZname:this.propZname
        });
    } else {
        this.addHistoryItem(optionTypes.ITEM_SET_STYLE, {
            tdId: this.tdId,
            id: this.id,
            style: cloneData(this.style),
            propName: this.propName,
            propId: this.propId,
            propZname:this.propZname
        },false);
    }
    const {style,propName,propId,propZname} = data.data;
    this.propName = propName;
    this.propId = propId;
    this.propZname = propZname;
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
        propZname:this.propZname,
        value:this.value
    });
    if(this.type == componentText || this.type == componentCheckBox || this.type == componentRadioBox){
        this.value = value;
    }
    this.style = {...this.style,...style};
    this.propName = props.name;
    this.propId = props.id;
    this.propZname = props.zname;
    this.afterUpdateStyle();
}

export function onContextMenuShow(item,pageX,pageY){
    let cStyle = findItem(this.styleArr,'id',this.styleId);
    let style1 = {
        color:cStyle.color,
        fontFamily:cStyle.fontFamily,
        fontSize:cStyle.fontSize,
        fontStyleArray:cStyle.fontStyleArray,
        borderColor:cStyle.borderColor
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
        propId:this.propId,
        propZname:this.propZname
    });
}

export function exportData(){
    return {
        tdId:this.tdId,
        id:this.id,
        type:this.type,
        style:this.style,
        styleId:this.styleId,
        value:this.value,
        propId:this.propId,
        propName:this.propName,
        propZname:this.propZname
    };
}