/**
 * Created by wdd on 2016/11/24.
 */
import React,{Component,PropTypes} from 'react';
import tdMaker from './tdMaker'
import tableHeadMaker from './tableHeadMaker'
import * as operationTypes from './history/operationType'
import {cloneDataArray,cloneData} from '../utils/data-helper'
import {findItem} from '../../../utils/compatibaleApi'

export default class tableMaker extends Object {
    constructor(posInfo, functionArray, styleArr, styleId,dispatch,recoverData = null) {
        super();
        if(!recoverData) {
            this.id = 0;
            this.styleId = styleId;
            this.styleArr = styleArr;
            this.posInfo = posInfo;
        } else {
            this.id = recoverData.id;
            this.styleId = recoverData.styleId;
            this.styleArr = styleArr;
            this.posInfo = recoverData.posInfo;
        }
        this.dispatch = dispatch;
        this.registerFunc = registerFunc;
        this.registerFunc(functionArray);
        this.initTds = initTds;
        this.initTds(recoverData);
    }
}

export function registerFunc(functionArray){
    const {onTdClick,onTdContext,onComponentDrop,onComponentContext,afterUpdateStyle,onDeleteComponent,addNewHistory,addNewCancelHistory} = functionArray;
    this.onTdClick = onTdClick;
    this.onTdContext = onTdContext;
    this.onComponentDrop = onComponentDrop;
    this.onComponentContext = onComponentContext;
    this.afterUpdateStyle = afterUpdateStyle;
    this.onDeleteComponent = onDeleteComponent;
    this.addNewHistory = addNewHistory;
    this.addNewCancelHistory = addNewCancelHistory;
    this.getNode = getNode;
    this.merge = merge;
    this.split = split;
    this.getItemById = getItemById;
    this.setTdSize = setTdSize;
    this.setStyle = setStyle;
    this.insertComponent = insertComponent;
    this.setComponentStyle = setComponentStyle;
    this.deleteComponent = deleteComponent;
    this.exportData = exportData;
    this.checkIsValid = checkIsValid;
    this.getItemWidth = getItemWidth;
    this.getItemHeight = getItemHeight;
    this.deleteTd = deleteTd;
    this.createTd = createTd;
    this.addTd = addTd;
    this.goBack = goBack;
    this.tdGoBack = tdGoBack;
    this.getBorderWidth = getBorderWidth;
    this.getBorderColor = getBorderColor;
    this.setRowHeight = setRowHeight;
    this.setColWidth = setColWidth;
}

export function setRowHeight(id,height2){
    let item = this.getItemById(id);
    if(item){
        const {y} = item.posInfo;
        let height1 = 0;
        for(let i=0;i<this.tds[0].length;i++){
            if(this.tds[y][i].mockType > 0){
                return false;
            }
            let width = this.getItemWidth(this.tds[y][i]);
            let height = this.getItemHeight(this.tds[y][i]);
            if(i==0){
                height1 = height;
            } else {
                if(height != height1){
                    return false;
                }
            }
            i = i + width-1;
        }
        for(let i=0;i<this.tds[0].length;i++){
            if(this.tds[y][i].mockType == 0) {
                this.tds[y][i].setCommonHeight(height2);
            }
        }
    }
}

export function setColWidth(id,width2){
    let item = this.getItemById(id);
    if(item){
        const {x} = item.posInfo;
        let width = -1;
        for(let i=0;i<this.tds.length;i++){
            if(this.tds[i][x].mockType > 0){
                return false;
            }
            let width1 = this.getItemWidth(this.tds[i][x]);
            let height1 = this.getItemHeight(this.tds[i][x]);
            if(i == 0){
                width = width1;
            } else {
                if(width1 != width){
                    return false;
                }
            }
            i = i+height1-1;
        }
        for(let i=0;i<this.tds.length;i++){
            if(this.tds[i][x].mockType == 0){
                this.tds[i][x].setCommonWidth(width2);
            }
        }
    }
}

export function initTds(recoverData){
    const {row, col} = this.posInfo;
    let tdArr = [];
    if(!recoverData) {
        for (let i = 0; i < row; i++) {
            tdArr[i] = [];
            for (let j = 0; j < col; j++) {
                tdArr[i][j] = this.createTd(j,i,null);
            }
        }
    } else {
        recoverData.tds.map(item=>{
            tdArr.push(item.map(item2=>{
                return this.createTd(null,null,item2);
            }))
        });
    }
    let headData = recoverData ? recoverData.header : null;
    let styleId = headData ? headData.styleId : this.styleId;
    this.header = new tableHeadMaker(col,'',this.styleArr,styleId,this.onComponentContext, this.afterUpdateStyle,headData);
    this.tds = tdArr;
}

export function createTd(x,y,recoverData){
    let functionArray = {
        onTdClick: this.onTdClick,
        onTdContext: this.onTdContext,
        onComponentDrop: this.onComponentDrop,
        onComponentContext: this.onComponentContext,
        afterUpdateStyle: this.afterUpdateStyle,
        onDeleteComponent: this.onDeleteComponent,
        addNewHistory:this.addNewHistory,
        addNewCancelHistory:this.addNewCancelHistory,
        deleteTd:this.deleteTd.bind(this),
        addTd:this.addTd.bind(this)
    };
    if(!recoverData) {
        const {row, col, width, height} = this.posInfo;
        let posInfo = {x: x, y: y, cCol: 1, tCol: col, cRow: 1, tRow: row, tWidth: width, tHeight: height};
        return new tdMaker(posInfo, this.id++, this.styleArr, this.styleId, 0, functionArray, this.dispatch,this.setRowHeight.bind(this),this.setColWidth.bind(this));
    } else {
        return new tdMaker(null,null,this.styleArr,this.styleId,null,functionArray,this.dispatch,this.setRowHeight.bind(this),this.setColWidth.bind(this),recoverData);
    }
}

export function insertComponent(tdId,componentType,styleArr,styleId){
    let tdItem = this.getItemById(tdId);
    if(tdItem){
        tdItem.insertComponent(componentType,styleArr,styleId);
    }
}

export function deleteComponent(tdId,componentId){
    let item = this.getItemById(tdId);
    if(item){
        item.deleteComponent(componentId);
    }
}

export function setComponentStyle(tdId,componentId,style){
    let item = this.getItemById(tdId);
    if(item){
        item.setComponentStyle(componentId,style);
    }
}

export function setStyle(styleArr,styleId){
    this.styleArr = styleArr;
    for(let i=0;i<this.tds.length;i++){
        for(let j=0;j<this.tds[i].length;j++){
            this.tds[i][j].setStyle(styleArr,styleId);
        }
    }
    this.header.setStyle(styleArr,styleId);
}

export function exportData(){
    const tds = this.tds.map(item=>{
        return item.map(item2=>{
            return item2.exportData();
        })
    });
    return {
        header:this.header.exportData(),
        tds:tds,
        id:this.id,
        styleId:this.styleId,
        posInfo:this.posInfo
    }
}

export function merge(tdArr){
    let pointsArr = [];
    let beforeTds = cloneDataArray(this.tds);
    tdArr.map(id=>{
        let item = this.getItemById(id);
        let xLength = 1,yLength=1;
        const {x,y} = item.posInfo;
        for (let i = x + 1; i < this.tds[y].length; i++) {
            if ([1, 3].indexOf(this.tds[y][i].mockType) >= 0) {
                xLength ++;
            } else {
                break;
            }
        }
        for(let j=y+1;j<this.tds.length;j++){
            if([2,3].indexOf(this.tds[j][x].mockType) >= 0){
                yLength++;
            } else {
                break;
            }
        }
        for(let i=0;i<xLength;i++){
            for(let j=0;j<yLength;j++){
                pointsArr.push([x+i,y+j]);
            }
        }
    });
    let pointArr2 = [];
    let yArr = [];
    for(let i = 0;i<pointsArr.length;i++){
        let yIndex = yArr.indexOf(pointsArr[i][1]);
        if(yIndex < 0){
            yArr.push(pointsArr[i][1]);
            yIndex = yArr.length-1;
            pointArr2.push([]);
        }
        pointArr2[yIndex].push(pointsArr[i]);
    }
    pointArr2.sort(function (item1, item2) {
        return item1[0][1] - item2[0][1];
    });
    for(let i=0;i<pointArr2.length;i++){
        pointArr2[i].sort(function (item1, item2) {
            return item1[0] -item2[0];
        })
    }
    if(pointArr2.length == 1){
        let startX = pointArr2[0][0][0],endX=pointArr2[0][pointArr2[0].length-1][0];
        if(endX -startX +1 != pointArr2[0].length){
            return false;
        }
    } else {
        for (let i = 1; i < pointArr2.length; i++) {
            let arr1 = pointArr2[i], arr2 = pointArr2[i - 1];
            let startX1 = arr1[0][0], startX2 = arr2[0][0];
            let endX1 = arr1[arr1.length - 1][0], endX2 = arr2[arr2.length - 1][0];
            if (startX1 != startX2 || endX2 != endX1 || (endX1 - startX1 != endX2 - startX2) || (endX2 - startX2 + 1 != arr2.length)) {
                return false;
            }
        }
    }
    if(pointArr2[0].length == 1){
        let startY = pointArr2[0][0][1],endY=pointArr2[pointArr2.length-1][0][1];
        if(endY - startY + 1 != pointArr2.length){
            return false;
        }
    } else {
        for (let i = 1; i < pointArr2[0].length; i++) {
            let startY1 = pointArr2[0][i][1], startY2 = pointArr2[0][i - 1][1];
            let endY1 = pointArr2[pointArr2.length - 1][i][1], endY2 = pointArr2[pointArr2.length - 1][i - 1][1];
            if (startY1 != startY2 || endY2 != endY1 || (endY1 - startY1 != endY2 - startY2) || (endY2-startY2+1 != pointArr2.length)) {
                return false;
            }
        }
    }
    let minX = pointArr2[0][0][0],minY = pointArr2[0][0][1];
    let maxX = pointArr2[0][pointArr2[0].length-1][0],maxY = pointArr2[pointArr2.length-1][0][1];

    for(let i = minX+1;i<maxX+1;i++){
        this.tds[minY][i].mockType = 1;
    }
    for(let i = minY+1;i<maxY+1;i++){
        this.tds[i][minX].mockType = 2;
    }
    for(let i = minX + 1;i<maxX+1;i++){
        for(let j=minY+1;j<maxY+1;j++){
            this.tds[j][i].mockType = 3;
        }
    }
    if(!this.checkIsValid()){
        this.tds = beforeTds;
        alert('对不起，这样操作可能会导致表格显示异常');
        return false;
    } else {
        this.setTdSize();
        this.addNewHistory(operationTypes.MERGE_TDS,{tds:beforeTds});
        return true;
    }
}

export function split(id){
    let beforeData = cloneDataArray(this.tds);
    let tdItem = this.getItemById(id);
    if(tdItem){
        const {x,y} = tdItem.posInfo;
        if((this.tds[y][x+1] && [1,3].indexOf(this.tds[y][x+1].mockType) >= 0) || (this.tds[y+1][x] && this.tds[y+1][x].mockType >=2)){
            let xLength = 0,yLength =0;
            if(this.tds[y][x+1] && [1,3].indexOf(this.tds[y][x+1].mockType) >=0){
                for(let i = x+1;i<this.tds[y].length;i++){
                    if([1,3].indexOf(this.tds[y][i].mockType) >=0 ){
                        this.tds[y][i].mockType = 0;
                        xLength++;
                    } else {
                        break;
                    }
                }
            }
            if(y < this.tds.length -1) {
                if (this.tds[y + 1][x] && this.tds[y + 1][x].mockType >= 2) {
                    for (let i = y + 1; i < this.tds.length; i++) {
                        if (this.tds[i][x].mockType >= 2) {
                            this.tds[i][x].mockType = 0;
                            yLength++;
                        } else {
                            break;
                        }
                    }
                }
            }
            for(let i=0;i<xLength;i++){
                for(let j=0;j<yLength;j++){
                    this.tds[y+j+1][x+i+1].mockType = 0;
                }
            }
        } else {
            return false;
        }
        if(!this.checkIsValid()){
            this.tds = beforeData;
            alert('对不起，这样操作可能会导致表格显示异常');
            return false;
        } else {
            this.setTdSize();
            this.addNewHistory(operationTypes.SPLIT_TDS, {tds: beforeData});
            return true;
        }
    }
}

export function checkIsValid(){
    for(let i=0;i<this.tds[0].length;i++){
        let minWidth = 1000;
        let maxWidth = -1;
        for(let j=0;j<this.tds.length;j++){
            let width = this.getItemWidth(this.tds[j][i]);
            if(minWidth > width){
                minWidth = width;
            }
            if(maxWidth < width){
                maxWidth = width;
            }
        }
        if(minWidth >1 && minWidth == maxWidth){
            i = i + minWidth -1;
        }
        if(maxWidth == 0 || (minWidth > 1 && minWidth != maxWidth)){
            return false;
        }
    }
    for(let i=0;i<this.tds.length;i++){
        let minHeight = 1000;
        let maxHeight = -1;
        for(let j=0;j<this.tds[0].length;j++){
            let height = this.getItemHeight(this.tds[i][j]);
            if(minHeight > height){
                minHeight = height;
            }
            if(maxHeight < height){
                maxHeight = height;
            }
        }
        if(minHeight > 1 && minHeight == maxHeight){
            i = i + minHeight -1;
        }
        if(maxHeight == 0 || (minHeight > 1 && minHeight != maxHeight)){
            return false;
        }
    }
    return true;
}

export function goBack(item,isCancel=false){
    let beforeTds = cloneDataArray(this.tds);
    if(!isCancel) {
        this.addNewCancelHistory(item.type, {tds: beforeTds});
    } else {
        this.addNewHistory(item.type,{tds:beforeTds},false);
    }
    this.tds = item.data.tds;
}

export function tdGoBack(data,isCancel=false){
    if(data.type != operationTypes.ITEM_SET_STYLE) {
        const {x, y} = data.data.obj.posInfo;
        let beforeTd = cloneData(this.tds[y][x]);
        if(!isCancel) {
            this.addNewCancelHistory(data.type, {obj: beforeTd});
        } else {
            this.addNewHistory(data.type,{obj:beforeTd},false);
        }
        this.tds[y][x] = data.data.obj;
    } else {
        const {tdId,id} = data.data;
        let item = this.getItemById(tdId);
        if(item){
            item.goBack(data,isCancel);
        }
    }
}

export function getItemWidth(item,ignoreMock = false){
    if(item.mockType > 0 && !ignoreMock){
        return 0;
    }
    const {x,y} = item.posInfo;
    let length = this.tds[y].length;
    let tWidth = 1;
    for(let i =x+1;i<length;i++){
        if([1,3].indexOf(this.tds[y][i].mockType) >= 0){
            tWidth++;
        } else {
            break;
        }
    }
    return tWidth;
}

export function getItemHeight(item,ignoreMock = false){
    if(item.mockType > 0 && !ignoreMock){
        return 0;
    }
    const {x,y} = item.posInfo;
    let length  = this.tds.length;
    let tHeight = 1;
    for(let i = y+1;i<length;i++){
        if([2,3].indexOf(this.tds[i][x].mockType) >= 0){
            tHeight++;
        } else {
            break;
        }
    }
    return tHeight;
}

export function setTdSize(){
    let xLength = this.tds[0].length;
    let yLength = this.tds.length;
    for(let i = 0;i<yLength;i++){
        let totalXLength = 0;
        let arr = [],arrTds = [];
        for(let j=0;j<xLength;j++){
            let maxHeight = -1,minHeight = 1000;
            let validNum = 0;
            if(this.tds[i][j].mockType == 0) {
                validNum++;
                let cWidth = 1, cHeight = 1;
                for(let k=j+1;k<xLength;k++){
                    if([1,3].indexOf(this.tds[i][k].mockType) >= 0){
                        cWidth += 1;
                    } else {
                        break;
                    }
                }
                for(let l=i+1;l<yLength;l++){
                    if([2,3].indexOf(this.tds[l][j].mockType) >= 0){
                        cHeight += 1;
                    } else {
                        break;
                    }
                }
                maxHeight = maxHeight < cHeight ? cHeight : maxHeight;
                minHeight = minHeight > cHeight ? cHeight : minHeight;
                totalXLength += cWidth;
                this.tds[i][j].posInfo.cCol = cWidth;
                this.tds[i][j].posInfo.tCol = xLength;
                this.tds[i][j].posInfo.cRow = cHeight;
                this.tds[i][j].posInfo.cRowFix = false;
                this.tds[i][j].posInfo.tRow = yLength;
                arrTds.push(this.tds[i][j]);
            }
        }
        let isTheSame = true;
        if(xLength == totalXLength){
            for(let f=1;f<arrTds.length;f++){
                if(arrTds[f].posInfo.cRow > 1 && arrTds[f-1].posInfo.cRow > 1){
                    if(arrTds[f].posInfo.cRow != arrTds[f-1].posInfo.cRow){
                        isTheSame = false;
                        break;
                    }
                } else {
                    isTheSame = false;
                    break;
                }
            }
        } else {
            isTheSame = false;
        }
        if(isTheSame){
            for(let k=0;k<arrTds.length;k++){
                arrTds[k].posInfo.cRowFix = true;
            }
        }
    }
}

export function getItemById(id){
    for(let i=0;i<this.tds.length;i++){
        for(let j=0;j<this.tds[i].length;j++){
            if(this.tds[i][j].id == id){
                return this.tds[i][j];
            }
        }
    }
    return null;
}

export function addTd(id,isRow,isBefore) {
    let beforeTds = cloneDataArray(this.tds);
    let item = this.getItemById(id);
    if(item){
        if(isRow){
            let length = this.tds[0].length;
            let iHeight = this.getItemHeight(item);
            const {x,y} = item.posInfo;
            let tdArr = this.tds[y];
            let i = 0;
            while(i<tdArr.length){
                let item = tdArr[i];
                let width1 = this.getItemWidth(item,true);
                let height1 = this.getItemHeight(item,true);
                if(height1 != iHeight){
                    return false;
                }
                i += width1;
            }
            if(!isBefore) {
                this.tds.splice(y + 1, 0, []);
            } else {
                this.tds.splice(y,0,[]);
            }
            let insertY = isBefore ? y : y+1;
            for (let i = 0; i < length; i++) {
                this.tds[insertY][i] = this.createTd(i, insertY, null);
            }
            let startY = isBefore ? y+1 : y+2;
            for (let i = startY; i < this.tds.length; i++) {
                for (let j = 0; j < this.tds[i].length; j++) {
                    this.tds[i][j].posInfo.y += 1;
                }
            }
            this.addNewHistory(operationTypes.ADD_TDS,{tds:beforeTds});
            this.onTdClick(-1, true);
        } else {
            let iWidth = this.getItemWidth(item);
            const {x,y} = item.posInfo;
            let i=0;
            while (i<this.tds.length){
                let item = this.tds[i][x];
                let width1 = this.getItemWidth(item);
                let height1 = this.getItemHeight(item);
                if(iWidth != width1){
                    return false;
                }
                i += height1;
            }
            let insertX = isBefore ? x : x+1;
            let startX = isBefore ? x+1 : x+2;
            for(let i=0;i<this.tds.length;i++){
                this.tds[i].splice(insertX,0,this.createTd(insertX, i, null));
                for(let j=startX;j<this.tds[i].length;j++){
                    this.tds[i][j].posInfo.x += 1;
                }
            }
            this.addNewHistory(operationTypes.ADD_TDS,{tds:beforeTds});
            this.onTdClick(-1, true);
        }
        if(this.tds[0]) {
            this.header.setColSpan(this.tds[0].length);
        }
    }
}

export function deleteTd(id,isRow){
    let beforeTds = cloneDataArray(this.tds);
    let item = this.getItemById(id);
    if(item && item.mockType == 0) {
        if (isRow) {
            let iHeight = this.getItemHeight(item);
            const {y} = item.posInfo;
            let tdArr = this.tds[y];
            let i = 0;
            while (i < tdArr.length) {
                let item = this.tds[y][i];
                let width1 = this.getItemWidth(item);
                let height1 = this.getItemHeight(item);

                if (height1 != iHeight) {
                    return false;
                }
                i = i + width1;
            }
            this.tds.splice(y, iHeight);
            for (let i = y; i < this.tds.length; i++) {
                for (let j = 0; j < this.tds[i].length; j++) {
                    this.tds[i][j].posInfo.y -= iHeight;
                }
            }
            this.onTdClick(-1, true);
            this.addNewHistory(operationTypes.DEL_TDS,{tds:beforeTds});
        } else {
            let iWidth = this.getItemWidth(item);
            const {x,y} = item.posInfo;
            let i=0;
            while (i<this.tds.length){
                let item = this.tds[i][x];
                let width1 = this.getItemWidth(item);
                let height1 = this.getItemHeight(item);
                if(iWidth != width1){
                    return false;
                }
                i += height1;
            }
            for(let i=0;i<this.tds.length;i++){
                this.tds[i].splice(x,iWidth);
                for(let j=x;j<this.tds[i].length;j++){
                    this.tds[i][j].posInfo.x -= iWidth;
                }
            }
            this.onTdClick(-1,true);
            this.addNewHistory(operationTypes.DEL_TDS,{tds:beforeTds});
        }
        if(this.tds[0]) {
            this.header.setColSpan(this.tds[0].length);
        }
    }
}

export function getBorderWidth(){
    let style = findItem(this.styleArr,'id',this.styleId);
    if(style){
        return style.borderSize;
    }
    return 0;
}

export function getBorderColor(){
    let style = findItem(this.styleArr,'id',this.styleId);
    if(style){
        return style.borderColor;
    }
    return null;
}

export function getNode(ids){
    const {col} = this.posInfo;
    let trArr = [];
    this.tds.map((tdSub,index)=>{
        let tdArr2 = [];
        tdSub.map((item,index1)=>{
            let item1 = item.getNode(ids,index1);
            if(item1){
                tdArr2.push(item1);
            }
        });
        if(tdArr2 && tdArr2.length > 0) {
            trArr.push(<tr key={index}>{tdArr2}</tr>);
        }
    });
    let headerNode = this.header.getNode();
    const {width,height} = this.posInfo;
    let style = {width:Math.ceil(width/col) * col};
    style.border = '0';
    style.borderColor = this.getBorderColor();
    return (
        <div style={{
            marginTop: '10px',
            overflow: 'auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <table  style={style}>
                <tbody>
                    {headerNode}
                    {trArr}
                </tbody>
            </table>
        </div>
    );
}