/**
 * Created by wdd on 2016/11/24.
 */
import tdMaker from './tdMaker'
import tableHeadMaker from './tableHeadMaker'
import React,{Component,PropTypes} from 'react';

export default class tableMaker extends Object {
    constructor(posInfo, functionArray, styleArr, styleId,dispatch) {
        super();
        this.id = 0;
        this.styleId = styleId;
        this.styleArr = styleArr;
        this.posInfo = posInfo;
        this.dispatch = dispatch;

        this.registerFunc = registerFunc;
        this.registerFunc(functionArray);
        this.initTds = initTds;
        this.initTds();
    }
}

export function registerFunc(functionArray){
    const {onTdClick,onTdContext,onComponentDrop,onComponentContext,afterUpdateStyle,onDeleteComponent} = functionArray;
    this.onTdClick = onTdClick;
    this.onTdContext = onTdContext;
    this.onComponentDrop = onComponentDrop;
    this.onComponentContext = onComponentContext;
    this.afterUpdateStyle = afterUpdateStyle;
    this.getNode = getNode;
    this.merge = merge;
    this.split = split;
    this.getItemById = getItemById;
    this.setTdSize = setTdSize;
    this.setStyle = setStyle;
    this.insertComponent = insertComponent;
    this.setComponentStyle = setComponentStyle;
    this.deleteComponent = deleteComponent;
    this.onDeleteComponent = onDeleteComponent;
}

export function initTds(){
    let tdArr = [];
    const {row, col, width, height} = this.posInfo;
    for (let i = 0; i < row; i++) {
        tdArr[i] = [];
        for (let j = 0; j < col; j++) {
            let posInfo = {x: j, y: i, cCol: 1, tCol: col, cRow: 1, tRow: row, tWidth: width, tHeight: height};
            let functionArray = {
                onTdClick:this.onTdClick,
                onTdContext:this.onTdContext,
                onComponentDrop:this.onComponentDrop,
                onComponentContext:this.onComponentContext,
                afterUpdateStyle:this.afterUpdateStyle,
                onDeleteComponent:this.onDeleteComponent
            };
            tdArr[i][j] = new tdMaker(posInfo, this.id++, this.styleArr, this.styleId, 0, functionArray,this.dispatch)
        }
    }
    this.header = new tableHeadMaker(col,'',this.styleArr,this.styleId,this.onComponentContext,this.afterUpdateStyle);
    this.tds = tdArr;
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

export function setStyle(styleArr){
    this.styleArr = styleArr;
    for(let i=0;i<this.tds.length;i++){
        for(let j=0;j<this.tds[i].length;j++){
            this.tds[i][j].setStyle(styleArr);
        }
    }
    this.header.setStyle(styleArr);
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
    this.setTdSize();
    return true;
}

export function split(id){
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
            if(this.tds[y+1][x] && this.tds[y+1][x].mockType >=2){
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

export function setTdSize(){
    let xLength = this.tds[0].length;
    let yLength = this.tds.length;
    for(let i = 0;i<yLength;i++){
        let totalXLength = 0;
        let arr = [],arrTds = [];
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

export function getNode(ids){
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
    let style = {width:width+'px',height:height+'px'};
    style.border = '0';
    return (
        <div>
            <table  style={style}>
                <tbody>
                    {headerNode}
                    {trArr}
                </tbody>
            </table>
        </div>
    );
}