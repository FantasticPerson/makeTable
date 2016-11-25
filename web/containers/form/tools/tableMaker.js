/**
 * Created by wdd on 2016/11/24.
 */
import tdMaker from './tdMaker'
import tableHeadMaker from './tableHeadMaker'
import React,{Component,PropTypes} from 'react';

export default class tableMaker2 extends Object{
    constructor(num1,num2,style){
        super();
        this.id = 0;
        let tdArr = [];
        for(let i=0;i<num1;i++){
            for(let j=0;j<num2;j++){
                tdArr.push(new tdMaker({x:j,y:i,cols:1,rows:1},this.id++,{},null));
            }
        }
        // this.tableHead = new tableHeadMaker(null,'sdf sdfsd sdf ');
        this.rows = num2;
        this.cols = num1;
        this.tds = tdArr;
        this.setContent = setContent;
        this.getContent = getContent;
        this.getNode = getNode;
        this.splitTd = splitTd;
        this.mergeTd = mergeTd;
        this.splitTr = splitTr;
        this.mergeTr = mergeTr;
        this.getRelatedItemsSplitTd = getRelatedItemsSplitTd;
        this.getMaxCommonDivisor = getMaxCommonDivisor;
        this.getRelatedItemSplitTr = getRelatedItemSplitTr;
    }
}
export function setContent(){}

export function getContent() {}

export function splitTd(id){
    let tdItem = this.tds.find((item)=>{
        return item.id == id;
    });
    if(tdItem){
        const {x,y,cols,rows} = tdItem.posInfo;
        let itemsRow = this.tds.filter((item)=>{
            return item.y == y && item.x > x;
        });
        let itemsTpExpand = this.getRelatedItemsSplitTd(tdItem);
        for(let i=0;i<itemsTpExpand.length;i++){
            itemsTpExpand[i].posInfo.cols *= 2;
        }
        for(let i=0;i<itemsRow.length;i++){
            itemsRow[i].x += 1;
        }
        this.tds.splice(this.tds.indexOf(tdItem),1);
        this.tds.push(new tdMaker({x:x,y:y,cols:cols,rows:rows},this.id++,{colS:1,rowS:1},null));
        this.tds.push(new tdMaker({x:x+1,y:y,cols:cols,rows:rows},this.id++,{colS:1,rowS:1},null));
        let mCD = this.getMaxCommonDivisor();
        if(mCD > 1) {
            this.tds.map((item)=> {
                item.posInfo.cols /= mCD;
            });
        }
    }
}

export function getRelatedItemsSplitTd(item){
    const {x,y,cols,rows} = item.posInfo;
    return this.tds.filter((item1)=>{
        return item != item1;
    });
}

export function getRelatedItemSplitTr(item){
    const {x,y,cols,rows} = item.posInfo;
    return this.tds.filter((item1)=>{
        return item1 != item && item1.posInfo.y == y;
    })
}

export function mergeTd(id,id2){
    let item1 = this.tds.find((item)=>{
        return item.id == id;
    });
    let item2 = this.tds.find((item)=>{
        return item.id == id2;
    });
    let previousItem = item1.posInfo.x > item2.posInfo.x ? item2 : item1;
    let afterItem = item2 == previousItem ? item1 : item2;
    previousItem.posInfo.cols *= 2;
    this.tds.splice(this.tds.indexOf(item2),1);
    let itemsRow = this.tds.filter((item)=>{
        return item.posInfo.y == afterItem.posInfo.y && item.posInfo.x > afterItem.posInfo.x;
    });
    for(let i=0;i<itemsRow.length;i++){
        itemsRow[i].posInfo.x -= 1;
    }
    let mCD = this.getMaxCommonDivisor();
    if(mCD > 1) {
        this.tds.map((item)=> {
            item.posInfo.cols /= mCD;
        });
    }
}

export function splitTr(id){
    let tdItem = this.tds.find((item)=>{
        return item.id == id;
    });
    if(tdItem){
        const {x,y,cols,rows} = tdItem.posInfo;
        let itemsRow = this.tds.filter((item)=>{
            return item.y > y;
        });
        let itemsTpExpand = this.getRelatedItemSplitTr(tdItem);
        for(let i=0;i<itemsTpExpand.length;i++){
            itemsTpExpand[i].posInfo.rows *= 2;
        }
        for(let i=0;i<itemsRow.length;i++){
            itemsRow[i].y += 1;
        }
        this.tds.splice(this.tds.indexOf(tdItem),1);
        this.tds.push(new tdMaker({x:x,y:y,cols:cols,rows:rows},this.id++,{colS:1,rowS:1},null));
        this.tds.push(new tdMaker({x:x,y:y+1,cols:cols,rows:rows},this.id++,{colS:1,rowS:1},null));
        let mCD = this.getMaxCommonDivisor();
        if(mCD > 1) {
            this.tds.map((item)=> {
                item.posInfo.cols /= mCD;
            });
        }
        console.log(this.tds);
    }
}

export function mergeTr(id1,id2){
    let item1 = this.tds.find((item)=>{
        return item.id == id1;
    });
    let item2 = this.tds.find((item)=>{
        return item.id == id2;
    });
    let beforeItem = item1.posInfo.y > item2.posInfo.y ? item2 : item1;
    let afterItem = beforeItem == item1 ? item2 : item1;
    let relatedItem = this.getRelatedItemSplitTr(beforeItem);
    this.tds.splice(this.tds.indexOf(afterItem),1);
    for(let i=0;i<relatedItem.length;i++){
        relatedItem[i].posInfo.rows = 1;
    }
}

export function getNode(){
    let tableData = {};
    let rowsArr = [];
    for(let i=0;i<this.tds.length;i++){
        if(! tableData[this.tds[i].y]){
            tableData[this.tds[i].y] = [];
            rowsArr.push(this.tds[i].y);
        }
        tableData[this.tds[i].y].push(this.tds[i]);
    }
    let trArr = [];
    rowsArr.sort();
    for(let i=0;i<rowsArr.length;i++){
        let tdArr = tableData[rowsArr[i]];
        tdArr.sort(function(item1,item2){
            return item1.x - item2.x;
        });
        let tdNodeArr = [];
        for(let j=0;j<tdArr.length;j++){
            tdNodeArr.push(tdArr[j].getNode())
        }
        let trNode = (<tr>{tdNodeArr}</tr>);
        trArr.push(trNode);
    }
    return (
        <table  style={{width:'688px',height:'355px',border:'1px solid'}}>
            <tbody>
                {trArr}
            </tbody>
        </table>
    );
}

export function getMaxCommonDivisor(){
    let rowsArr = this.tds.map((item)=>{
        return item.posInfo.rows;
    });
    let mCD = 1;
    if(rowsArr.length >= 2){
        let mCD = maxGys(rowsArr[0],rowsArr[1]);
        for(let i=2;i<rowsArr.length;i++){
            mCD = maxGys(mCD,rowsArr[i]);
        }
    }
    return mCD;

    function maxGys(num1,num2) {
        let u=num1,v=num2,t=v;
        while(v!=0){
            t=u%v;
            u=v;
            v=t;
        }
        return u;
    }
}