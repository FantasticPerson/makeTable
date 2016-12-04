/**
 * Created by wdd on 2016/11/24.
 */
import tdMaker from './tdMaker'
import tableHeadMaker from './tableHeadMaker'
import React,{Component,PropTypes} from 'react';

export default class tableMaker extends Object {
    constructor(posInfo, functionArray, styleArr, styleId) {
        super();
        this.id = 0;
        this.styleId = styleId;
        this.styleArr = styleArr;

        this.registerFunc = registerFunc;
        this.registerFunc(functionArray);
        this.initTds = initTds;
        this.initTds(posInfo);
    }
}

export function registerFunc(functionArray){
    const {onTdClick,onTdContext,onComponentDrop,onComponentContext} = functionArray;
    this.onTdClick = onTdClick;
    this.onTdContext = onTdContext;
    this.onComponentDrop = onComponentDrop;
    this.onComponentContext = onComponentContext;
    this.getNode = getNode;
    this.mergeTd = mergeTd;
    this.mergeTr = mergeTr;
    this.merge = merge;
    this.split = split;
    this.getItemById = getItemById;
    this.setTdSize = setTdSize;
    this.setMockType = setMockType;
    this.setStyle = setStyle;
    this.insertComponent = insertComponent;
    this.setComponentStyle = setComponentStyle;
}

export function initTds(posInfo){
    let tdArr = [];
    const {row, col, width, height} = posInfo;
    for (let i = 0; i < row; i++) {
        tdArr[i] = [];
        for (let j = 0; j < col; j++) {
            let posInfo = {x: j, y: i, cCol: 1, tCol: col, cRow: 1, tRow: row, tWidth: width, tHeight: height};
            let functionArray = {
                onTdClick:this.onTdClick,
                onTdContext:this.onTdContext,
                onComponentDrop:this.onComponentDrop,
                onComponentContext:this.onComponentContext
            };
            tdArr[i][j] = new tdMaker(posInfo, this.id++, this.styleArr, this.styleId, 0, functionArray)
        }
    }
    this.tds = tdArr;
}

export function insertComponent(tdId,componentType,styleArr,styleId){
    let tdItem = this.getItemById(tdId);
    if(tdItem){
        tdItem.insertComponent(componentType,styleArr,styleId);
    }
}

export function setComponentStyle(tdId,componentId,style){
    let item = this.getItemById(tdId);
    if(item){
        item.setComponentStyle(componentId,style);
    }
}

export function setStyle(styleArr){
    this.styleArr = styleArr;
    for(let i=0;i<this.tds.length;i++){
        for(let j=0;j<this.tds[i].length;j++){
            this.tds[i][j].setStyle(styleArr);
        }
    }
}

export function merge(tdArr){
    let pointsArr = [];
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
    for(let i=1;i<pointArr2.length;i++){
        let arr1 = pointArr2[i],arr2=pointArr2[i-1];
        let startX1 = arr1[0][0],startX2 = arr2[0][0];
        let endX1 = arr1[arr1.length-1][0],endX2 = arr2[arr2.length-1][0];
        if(startX1 != startX2 || endX2 != endX1 || (endX1 -startX1 != endX2 - startX2)){
            return false;
        }
    }
    for(let i =1 ;i<pointArr2[0].length;i++){
        let startY1 = pointArr2[0][i][1],startY2 = pointArr2[0][i-1][1];
        let endY1 = pointArr2[pointArr2.length-1][i][1],endY2 = pointArr2[pointArr2.length-1][i-1][1];
        if(startY1 != startY2 || endY2 != endY1 || (endY1-endY2 != startY1 - startY2)){
            return false;
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
    this.setTdSize();
    return true;
}

export function merge3(tdArr) {
    // let isSuccess = this.mergeTd(tdArr);
    // if(isSuccess){
    //     return true;
    // } else {
    //     isSuccess = this.mergeTr(tdArr);
    // }
    // if(isSuccess){
    //     return true;
    // } else {
    //
    // }

    // let type = 1;
    // let isRow = false;
    // let isCol = false;
    // let isAllSingle = false;
    // let maxX = 0,minX=0,maxY=0,minY=0;
    let itemArr = tdArr.map(id=>{
        let item = this.getItemById(id);
        let xLength = 0;
        let yLength = 0;
        const {x,y} = item.posInfo;
        // if(x < this.tds[y].length -1) {
            for (let i = x + 1; i < this.tds[y].length; i++) {
                if ([1, 3].indexOf(this.tds[y][i].mockType) >= 0) {
                    xLength += 1;
                }
            }
        // }
        // if()
        for(let j=y+1;j<this.tds.length;j++){
            if([2,3].indexOf(this.tds[j][x].mockType) >= 0){
                yLength += 1;
            }
        }
        return {item:item,xLength,yLength};
    });

    let itemArr2 = [];
    let yArr = [];
    for(let i = 0;i<itemArr.length;i++){
        let yIndex = yArr.indexOf(itemArr[i].item.posInfo.y);
        if(yIndex < 0){
            yArr.push(itemArr[i].item.posInfo.y);
            itemArr2.push([]);
            yIndex = yArr.length -1;
        }
        itemArr2[yIndex].push(itemArr[i]);
    }
    for(let j = 0; j< itemArr2.length;j++){
        itemArr2[j].sort(function(item1,item2){
            return item1.item.posInfo.x - item2.item.posInfo.x;
        })
    }

    for(let i =1 ;i<itemArr2.length;i++){
        if(itemArr2[i].length != itemArr2[i-1].length){
            return false;
        }
        if(itemArr2[i][0].item.posInfo.x != itemArr2[i-1][0].item.posInfo.x){
            return false;
        }
        let item1 = itemArr2[i][itemArr2[i].length-1];
        let item2 = itemArr2[i-1][itemArr2[i].length-1];
        if((item1.item.posInfo.x + item1.xLength) != (item2.item.posInfo.x + item2.xLength)){
            return false;
        }
    }
    let length = itemArr2[0].length;
    let length2 = itemArr2.length;
    for(let i = 1;i<length;i++){
        if(itemArr2[0][i-1].item.posInfo.y != itemArr2[0][1].item.posInfo.y){
            return false;
        }
        let item1 = itemArr2[length2-1][i-1];
        let item2 = itemArr2[length2-1][i];
        if((item1.item.posInfo.y + item1.yLength) != (item2.item.posInfo.y + item2.yLength)){
            return false;
        }
    }
    let minX = itemArr2[0][0].item.posInfo.x;
    let minY = itemArr2[0][0].item.posInfo.y;
    let maxX = itemArr2[0][length-1].item.posInfo.x + itemArr2[0][length-1].xLength;
    let maxY = itemArr2[length2-1][length-1].item.posInfo.y + itemArr2[length2-1][length-1].yLength;

    for(let i = minX+1;i<maxX+1;i++){
        this.tds[minY][i].mockType = 1;
        // itemArr2[0][i].item.mockType = 1;
    }
    for(let i = minY+1;i<maxY+1;i++){
        this.tds[i][minX].mockType = 2;
        // itemArr2[i][minX].item.mockType = 2;
    }
    for(let i = minX + 1;i<maxX+1;i++){
        for(let j=minY+1;j<maxY+1;j++){
            this.tds[j][i].mockType = 3;
            // itemArr2[j][i].item.mockType = 3;
        }
    }
    this.setTdSize();
    console.log(itemArr2);
    return true;
}

export function mergeTd(tdArr){
    let itemArr = tdArr.map(id=>{
        return this.getItemById(id);
    });
    let isValid = true;
    itemArr.sort(function (item1,item2) {//check选择的td是否在同一行
        if(isValid && item1.posInfo.y != item2.posInfo.y){
            isValid = false;
        }
        return item1.posInfo.x - item2.posInfo.x;
    });
    if(!isValid) {
        return false;
    }
    if(isValid) {
        const {y} = itemArr[0].posInfo;
        let startX = itemArr[0].posInfo.x;
        let endX = itemArr[itemArr.length-1].posInfo.x;
        for (let i = startX+1; i < endX; i++) {//检查选择的td是否连续
            if((this.tds[y][i].mockType == 0 && itemArr.indexOf(this.tds[y][i]) < 0) || this.tds[y][i].mockType == 2){
                return false;
            }
        }
        let cRow=0,cRow2=0;
        for(let k=0;k<itemArr.length;k++){
            cRow2 = 0;
            let startX = itemArr[k].posInfo.x;
            for(let j=itemArr[k].posInfo.y+1;j<this.tds.length;j++){
                if(this.tds[j][startX].mockType >= 2){
                    k == 0 ? cRow += 1 : cRow2+=1;
                } else {
                    break;
                }
            }
            if( k != 0 && cRow != cRow2){
                return false;
            }
        }
        for(let i=startX+1;i<endX;i++){
            this.setMockType(this.tds[y][i],true,true);
        }
        this.setMockType(itemArr[itemArr.length-1],true,true);
    }
    this.setTdSize();
    return true;
}

export function mergeTr(tdArr){
    let itemArr = tdArr.map(id=>{
        return this.getItemById(id);
    });
    let isValid = true;
    itemArr.sort(function (item1,item2) {//check选择的td是否在同一行
        if(isValid && item1.posInfo.x != item2.posInfo.x){
            isValid = false;
        }
        return item1.posInfo.y - item2.posInfo.y;
    });
    if(!isValid) {
        return false;
    }
    if(isValid) {
        const {x} = itemArr[0].posInfo;
        let startY = itemArr[0].posInfo.y;
        let endY = itemArr[itemArr.length-1].posInfo.y;
        for (let i = startY+1; i < endY; i++) {//检查选择的td是否连续
            if(this.tds[i][x].mockType == 0 && itemArr.indexOf(this.tds[i][x]) < 0 || this.tds[i][x].mockType == 1){
                return false;
            }
        }
        let cCol=0,cCol2=0;
        for(let k=0;k<itemArr.length;k++){
            let startY = itemArr[k].posInfo.y;
            cCol2 = 0;
            for(let j=itemArr[k].posInfo.x+1;j<this.tds[0].length;j++){
                if([1,3].indexOf(this.tds[startY][j].mockType) >= 0){
                    k == 0 ? cCol += 1 : cCol2+=1;
                } else {
                    break;
                }
            }
            if( k != 0 && cCol != cCol2){
                return false;
            }
        }
        for(let i=startY+1;i<endY;i++){
            this.setMockType(this.tds[i][x],true,false);
        }
        this.setMockType(itemArr[itemArr.length-1],true,false);
    }
    this.setTdSize();
    return true;
}

export function split(id){
    let tdItem = this.getItemById(id);
    if(tdItem){
        const {x,y} = tdItem.posInfo;
        if((this.tds[y][x+1] && [1,3].indexOf(this.tds[y][x+1].mockType) >= 0) || (this.tds[y+1][x] && this.tds[y+1][x].mockType >=2)){
            let xLength = 0,yLength =0;
            if([1,3].indexOf(this.tds[y][x+1].mockType) >=0){
                for(let i = x+1;i<this.tds[y].length;i++){
                    if([1,3].indexOf(this.tds[y][i].mockType) >=0 ){
                        this.tds[y][i].mockType = 0;
                        xLength++;
                    } else {
                        break;
                    }
                }
            }
            if(this.tds[y+1][x].mockType >=2){
                for(let i = y+1;i<this.tds.length;i++){
                    if(this.tds[i][x].mockType >=2 ){
                        this.tds[i][x].mockType = 0;
                        yLength++;
                    } else {
                        break;
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
        this.setTdSize();
        return true;
    }
}

export function setMockType(item,isAdd,isTd){
    let cType = item.mockType;
    if(isAdd){
        if(isTd && (cType == 0 || cType == 2)){
            item.mockType += 1;
        } else if(!isTd && (cType == 0 || cType ==1)){
            item.mockType += 2;
        }
    } else{
        if(isTd && (cType == 1 || cType == 3)){
            item.mockType -= 1;
        } else if(!isTd && (cType == 2 || cType == 3)){
            item.mockType -= 2;
        }
    }
}

export function setTdSize(){
    let xLength = this.tds[0].length;
    let yLength = this.tds.length;
    for(let i = 0;i<yLength;i++){
        for(let j=0;j<xLength;j++){
            if(this.tds[i][j].mockType == 0) {
                let cWidth = 1, cHeight = 1;
                for(let k=j+1;k<xLength;k++){
                    if([1,3].indexOf(this.tds[i][k].mockType) >= 0){
                        cWidth += 1;
                    } else {
                        break;
                    }
                }
                for(let l=i+1;l<yLength;l++){
                    if([2,4].indexOf(this.tds[l][j].mockType) >= 0){
                        cHeight += 1;
                    } else {
                        break;
                    }
                }
                this.tds[i][j].posInfo.cCol = cWidth;
                this.tds[i][j].posInfo.tCol = xLength;
                this.tds[i][j].posInfo.cRow = cHeight;
                this.tds[i][j].posInfo.tRow = yLength;
            }
        }
    }
    console.log(this.tds);
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

export function getNode(ids){
    let cStyle = this.styleArr.find((item)=>{
        return item.id == this.styleId;
    });
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

    let style = {width:'668px',height:'355px'};
    let color = cStyle.borderColor;
    style.border = cStyle.borderSize+'px solid '+'rgba('+ color.r+','+color.g+','+color.b+','+color.a+')';
    return (
        <table  style={style}>
            <tbody>
                {trArr}
            </tbody>
        </table>
    );
}