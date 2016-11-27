/**
 * Created by wdd on 2016/11/24.
 */
import tdMaker from './tdMaker'
import tableHeadMaker from './tableHeadMaker'
import React,{Component,PropTypes} from 'react';

export default class tableMaker2 extends Object{
    constructor(num1,num2,onTdClick,style){
        super();
        this.getNode = getNode;
        this.splitTd = splitTd;
        this.mergeTd = mergeTd;
        this.splitTr = splitTr;
        this.mergeTr = mergeTr;
        this.getItemById = getItemById;
        this.getRowAndCol = getRowAndCol;
        this.getCols = getCols;
        this.setTdSize = setTdSize;
        this.setMockType = setMockType;
        this.onTdClick = onTdClick;
        this.id = 0;
        let tdArr = [];
        let width = 1/num2 * 100 + '%';
        let height = 1/num1 * 100 + '%';
        for(let i=0;i<num1;i++){
            tdArr[i] = [];
            for(let j=0;j<num2;j++){
                tdArr[i][j] = new tdMaker({x:j,y:i,cCol:1,tCol:num2,cRow:1,tRow:num1},this.id++,{width,height},0,this.onTdClick,null)
            }
        }
        this.tds = tdArr;
    }
}

export function splitTd(id){
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
}

export function splitTr(id){
    let tdItem = this.getItemById(id);
    if(tdItem){
        const {x,y} = tdItem.posInfo;
        if(this.tds[y+1][x] && this.tds[y+1][x].mockType >= 2){
            for(let i = y+1;i<this.tds.length;i++){
                if(this.tds[i][x].mockType >= 2){
                    this.setMockType(this.tds[i][x],false,false);
                } else {
                    break;
                }
            }
        } else {
            return false;
        }
        this.setTdSize();
        return true;
    }
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
        return item1.posInfo.x - item2.posInfo.x;
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

export function getRowAndCol(item){
    if(item.mockType != 0){
        return {};
    }
    const {x,y} = item.posInfo;
    let tdArr = this.tds[y];
    let rows = 1,cols=1;
    for(let i=x+1;i<tdArr.length;i++){
        if(tdArr[i].mockType == 1){
            cols++;
        } else {
            break;
        }
    }
    for(let j=y+1;j<this.tds.length;j++){
        if (this.tds[j][x].mockType == 2) {
            rows++;
        } else {
            break;
        }
    }
    return {rows,cols};
}

export function getCols(){
    let cols = 0;
    this.tds.map(item=>{
        cols = item.length > cols ? item.length : cols;
    });
    return cols;
}


export function getNode(){
    const trArr = this.tds.map((tdSub,index)=>{
       const tdArr = tdSub.map((item,index1)=>{
           return item.getNode(this.getRowAndCol(item),index1);
       });
       return (<tr key={index}>{tdArr}</tr>)
    });
    return (
        <table  style={{width:'688px',height:'355px',border:'1px solid'}}>
            <tbody>
                {trArr}
            </tbody>
        </table>
    );
}