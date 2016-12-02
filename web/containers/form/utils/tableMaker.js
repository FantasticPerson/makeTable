/**
 * Created by wdd on 2016/11/24.
 */
import tdMaker from './tdMaker'
import tableHeadMaker from './tableHeadMaker'
import React,{Component,PropTypes} from 'react';

export default class tableMaker extends Object{
    constructor(num1,num2,tWidth,tHeight,onTdClick,onRightClick,onComponentDrop,onComponentClick,style){
        super();
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
        this.onComponentDrop = onComponentDrop;
        this.style = style;
        this.onRightClick = onRightClick;
        this.onTdClick = onTdClick;
        this.onComponentClick = onComponentClick;
        this.id = 0;
        let tdArr = [];
        for(let i=0;i<num1;i++){
            tdArr[i] = [];
            for(let j=0;j<num2;j++){
                tdArr[i][j] = new tdMaker({x:j,y:i,cCol:1,tCol:num2,cRow:1,tRow:num1,tWidth,tHeight},this.id++,this.style,0,this.onTdClick,this.onRightClick,this.onComponentDrop,this.onComponentClick,null)
            }
        }
        this.tds = tdArr;
        this.setComponentStyle =setComponentStyle;
    }
}

export function insertComponent(tdId,componentType){
    let tdItem = this.getItemById(tdId);
    if(tdItem){
        tdItem.insertComponent(componentType);
    }
}

export function setComponentStyle(tdId,componentId,style){
    let item = this.getItemById(tdId);
    if(item){
        item.setComponentStyle(componentId,style);
    }
}

export function setStyle(style){
    this.style = style;
    for(let i=0;i<this.tds.length;i++){
        for(let j=0;j<this.tds[i].length;j++){
            this.tds[i][j].setStyle(style);
        }
    }
}

export function merge(tdArr) {
    let isSuccess = this.mergeTd(tdArr);
    if(isSuccess){
        return true;
    } else {
        isSuccess = this.mergeTr(tdArr);
        return isSuccess;
    }
}

export function merge2(tdArr){
    let itemArr = tdArr.map(id=>{
        return this.getItemById(id);
    });
    let itemArr2 = [],yArr=[];
    for(let i=0;i<itemArr.length;i++){
        if(yArr.indexOf(itemArr[i].posInfo.y) < 0){
            yArr.push(itemArr[i].posInfo.y);
            itemArr2.push([]);
        }
        let index = yArr.indexOf(itemArr[i].posInfo.y);
        itemArr2[index].push(itemArr[i]);
    }
    let isValid = true;
    itemArr2.sort(function(item1,item2){
        item1.sort(function(item3,item4){
            return item3.posInfo.x - item4.posInfo.x;
        });
        item2.sort(function(item5,item6){
            return item5.posInfo.x - item6.posInfo.x;
        });
        isValid = isValid && (item1.length == item2.length);
        return item1[0].posInfo.y - item2[0].posInfo.y;
    });
    if(!isValid){
        return false;
    }
    console.log(itemArr2);
    for(let j=0;j<itemArr2[0].length;j++){
        for(let i=1;i<itemArr.length;i++){
            if(itemArr[i-1][j].posInfo.x != itemArr[i][j].posInfo.x){
                return false;
            }
        }
    }
    for(let i=0;i<itemArr.length;i++){
        let startX = itemArr[i][0].posInfo.x;
        let endX = itemArr[i][itemArr[i].length-1].posInfo.x;
        for(let j=startX+1;j<endX;j++){

        }
    }
    for(let i=0;i<itemArr2.length;i++){
        if(!isValid){
            break;
        }
    }
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
    let color = this.style.borderColor;
    style.border = this.style.borderSize+'px solid '+'rgba('+ color.r+','+color.g+','+color.b+','+color.a+')';
    return (
        <table  style={style}>
            <tbody>
                {trArr}
            </tbody>
        </table>
    );
}