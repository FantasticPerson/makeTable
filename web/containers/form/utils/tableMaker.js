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
        this.onTdClick = onTdClick;
        this.id = 0;
        let tdArr = [];
        let width = 1/num2 * 100 + '%';
        let height = 1/num1 * 100 + '%';
        for(let i=0;i<num1;i++){
            tdArr[i] = [];
            for(let j=0;j<num2;j++){
                tdArr[i][j] = new tdMaker({x:j,y:i},this.id++,{width,height},0,this.onTdClick,null)
            }
        }
        // this.tableHead = new tableHeadMaker(null,'sdf sdfsd sdf ');
        this.tds = tdArr;
    }
}

export function splitTd(id){
    console.log('splitTd',id);
    let tdItem = this.getItemById(id);
    if(tdItem){
        const {x,y} = tdItem.posInfo;
        this.tds = this.tds.map((item,index)=>{
            let y1 = item[0].posInfo.y;
            if(index != y) {
                item.splice(x+1, 0, new tdMaker({x: x + 1, y:y1}, this.id++, {}, 1,this.onTdClick, null));
            }
            return item.map((item1,index2)=>{
                if(item1 == tdItem) {
                    return;
                }
                if(index2 > x+1){
                    item1.posInfo.x += 1;
                }
                if(x == item1.posInfo.x){
                    item1.posInfo.cols += 1;
                }
                return item1;
            });
        });
        const {width,height} = tdItem.style;
        let width2 = Number(width.slice(0,-1))/2 + '%';
        let tdObj1 = new tdMaker({x:x,y:y},this.id++,{width:width2,height},0,this.onTdClick,null);
        let tdObj2 = new tdMaker({x:x+1,y:y},this.id++,{width:width2,height},0,this.onTdClick,null);
        this.tds[tdItem.posInfo.y].splice(tdItem.posInfo.x,1,tdObj1,tdObj2);
    }
}

export function mergeTd(id,id2){
    let item1 = this.getItemById(id);
    let item2 = this.getItemById(id2);
    let previousItem = item1.posInfo.x > item2.posInfo.x ? item2 : item1;
    let afterItem = item2 == previousItem ? item1 : item2;
    const {x,y} = afterItem.posInfo;
    afterItem.mockType = 1;
    let mockNum = 0;
    for(let i=0;i<this.tds.length;i++){
        if(this.tds[i][x].mockType > 0){
            mockNum++;
        }
    }
    if(mockNum == this.tds.length) {
        for (let i = 0; i < this.tds.length; i++) {
            this.tds[i].splice(x,1);
            for(let j=x;j<this.tds[i].length;j++){
                this.tds[i][j].posInfo.x -= 1;
            }
        }
    }
    let width1 = item1.style.width,width2 = item2.style.width;
    previousItem.style.width = width1.slice(0,-1)+width2.slice(0,-1);
}

export function splitTr(id){
    let tdItem = this.getItemById(id);
    if(tdItem){
        const {x,y} = tdItem.posInfo;
        const {width,height} = tdItem.style;
        for(let i=y+1;i<this.tds.length;i++){
            let arr = this.tds[i];
            for(let j=0;j<arr.length;j++){
                arr[j].posInfo.y += 1;
            }
        }
        this.tds.splice(y+1,0,[]);
        let height2 = Number(height.slice(0,-1))/2 + '%';
        tdItem.style.height = height2;
        let colNum = this.getCols();
        for(let i = 0;i<colNum;i++){
            let mockType = i == x ? 0 : 2;
            this.tds[y+1].push(new tdMaker({x:i,y:y+1},this.id++,{width,height:height2},mockType,this.onTdClick,null));
        }
    }
}

export function mergeTr(id1,id2){
    let item1 = this.getItemById(id1);
    let item2 = this.getItemById(id2);
    let beforeItem = item1.posInfo.y > item2.posInfo.y ? item2 : item1;
    let afterItem = beforeItem == item1 ? item2 : item1;
    afterItem.mockType = 2;
    let colNum = this.getCols();
    const {y} = afterItem.posInfo;
    let rowNum = 0;
    for(let i=0;i<colNum;i++){
        if(this.tds[y][i].mockType > 0){
            rowNum++;
        }
    }
    if(rowNum == colNum){
        for(let i=y+1;i< this.tds.length;i++){
            for(let j = 0;j<this.tds[i].length;j++){
                this.tds[i][j].posInfo.y -= 1;
            }
        }
        this.tds.splice(y,1);
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