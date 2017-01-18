/**
 * Created by wdd on 2016/12/2.
 */
import clone from 'clone'

export function getMaxId(styleArr){
    if(styleArr.length > 0){
        let maxId = -1;
        for(let i= 0;i<styleArr.length;i++){
            if(styleArr[i].id > maxId){
                maxId = styleArr[i].id;
            }
        }
        return maxId;
    }
    return 0;
}

export function checkArrayEqual(arr1,arr2){
    if(!arr1 || !arr2){
        return false
    }
    if(arr1.length != arr2.length && arr1.length != 0){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i]) < 0){
            return false;
        }
    }
    for(let i = 0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i]) < 0){
            return false;
        }
    }
    return true;
}

export function cloneDataArray(arr){
    let tempArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] instanceof Array) {
            tempArr.push(cloneDataArray(arr[i]));
        } else {
            tempArr.push(clone(arr[i]));
        }
    }
    return tempArr;
}

export function cloneData(obj){
    return clone(obj);
}

export function getStyleSingleObj(obj){
    let style = {};
    style.border = obj.borderSize + 'px solid ' + obj.borderColor;
    style.color = obj.color;
    style.fontSize = obj.fontSize + 'px';
    style.fontFamily = obj.fontFamily;
    style.textAlign = obj.textAlign;
    style.fontStyle = obj.fontStyleArray[1] ? 'italic' : 'normal';
    style.fontWeight = obj.fontStyleArray[0] ? 'bold' : 'normal';

    return style;
}

export function getStyleObj(obj1,obj2){
    if(!obj1 || !obj1.color){
        console.log('llll')
    }
    let style = {
        color:obj1.color,
        fontFamily:obj1.fontFamily,
        fontSize:obj1.fontSize,
        fontStyleArray:obj1.fontStyleArray,
        borderSize:obj1.borderSize,
        borderColor:obj1.borderColor,
        textAlign:obj1.textAlign,
        verticalAlign:obj1.verticalAlign
    };
    let pStyle = {...style,...obj2};
    if(pStyle.marginLeft){
        pStyle.marginLeft = pStyle.marginLeft + 'px';
    }
    if(pStyle.marginTop){
        pStyle.marginTop = pStyle.marginTop + 'px';
    }
    if(pStyle.marginRight){
        pStyle.marginRight = pStyle.marginRight + 'px';
    }
    if(pStyle.marginBottom){
        pStyle.marginBottom = pStyle.marginBottom + 'px';
    }
    if(pStyle.width){
        pStyle.width = pStyle.width + 'px';
    }
    // if(pStyle.width1){
    //     pStyle.width1 = pStyle.width1 + 'px';
    // }
    if(pStyle.height){
        pStyle.height = pStyle.height + 'px';
    }
    // if(pStyle.height1){
    //     pStyle.height1 = pStyle.height1 + 'px';
    // }
    if(pStyle.showBorder){
        if(pStyle.showBorder[0]) {
            pStyle.borderTop = pStyle.borderSize + 'px solid ' + pStyle.borderColor;
        } else {
            pStyle.borderTopColor = "#FFF";
        }
        if(pStyle.showBorder[1]) {
            pStyle.borderBottom = pStyle.borderSize + 'px solid ' + pStyle.borderColor;
        } else {
            style.borderBottomColor = "#FFF";
        }
        if(pStyle.showBorder[2]) {
            pStyle.borderLeft = pStyle.borderSize + 'px solid ' + pStyle.borderColor;
        } else{
            style.borderLeftColor = "#FFF";
        }
        if(pStyle.showBorder[3]) {
            pStyle.borderRight = pStyle.borderSize + 'px solid ' + pStyle.borderColor;
        }else {
            pStyle.borderRightColor = "#FFF";
        }
    }
    pStyle.fontSize = pStyle.fontSize + 'px';
    pStyle.fontWeight = pStyle.fontStyleArray[0] ? 'bold' : 'normal';
    pStyle.fontStyle = pStyle.fontStyleArray[1] ? 'italic' : 'normal';
    return pStyle;
}

export function setItemStyle(item,style){
    if(style.fontSize) {
        item.style.fontSize = style.fontSize+'px';
    }
    if(style.color) {
        item.style.color = style.color;
    }
    if(style.fontFamily) {
        item.style.fontFamily = style.fontFamily;
    }
    if(style.marginTop || style.marginTop == 0){
        item.style.marginTop = style.marginTop + 'px';
    }
    if(style.marginLeft || style.marginLeft == 0){
        item.style.marginLeft = style.marginLeft + 'px';
    }
    if(style.width){
        item.style.width = style.width + 'px';
    }
    if(style.height) {
        item.style.height = style.height + 'px';
    }
    if(style.fontStyleArray){
        item.style.fontWeight = style.fontStyleArray[0] ? 'bold' : 'normal';
        item.style.fontStyle = style.fontStyleArray[1] ? 'italic' : 'normal';
    }
}

export function getStyleSet(style,styleObj){
    let cStyle = {};
    applyProp(styleObj,style,cStyle,'color');
    applyProp(styleObj,style,cStyle,'borderColor');
    applyProp(styleObj,style,cStyle,'fontSize');
    applyProp(styleObj,style,cStyle,'fontFamily');
    applyProp(styleObj,style,cStyle,'width');
    applyProp(styleObj,style,cStyle,'width1');
    applyProp(styleObj,style,cStyle,'height');
    applyProp(styleObj,style,cStyle,'height1');
    applyProp(styleObj,style,cStyle,'textAlign');
    applyProp(styleObj,style,cStyle,'verticalAlign');
    applyProp1(styleObj,style,cStyle,'marginTop');
    applyProp1(styleObj,style,cStyle,'marginLeft');
    applyProp1(styleObj,style,cStyle,'marginRight');
    applyProp1(styleObj,style,cStyle,'marginBottom');
    applyPropArr(styleObj,style,cStyle,'fontStyleArray');
    applyPropArr1(styleObj,style,cStyle,'dataArray');
    return cStyle;
}

export function applyProp(obj1,obj2,obj3,prop){
    if(obj1[prop] && obj1[prop] != obj2[prop]){
        obj3[prop] = obj1[prop];
    }
}

export function applyProp1(obj1,obj2,obj3,prop){
    if((obj1[prop] || obj1[prop] == 0) && obj1[prop] != obj2[prop]){
        obj3[prop] = obj1[prop];
    }
}

export function applyPropArr1(obj1,obj2,obj3,prop){
    if(obj1[prop] && (!obj2[prop] || !checkArrayEqual(obj1[prop],obj2[prop])) && obj1[prop].length>0){
        obj3[prop] = obj1[prop];
    }
}

export function applyPropArr(obj1,obj2,obj3,prop){
    if(obj1[prop] && !checkArrayEqual(obj1[prop],obj2[prop])){
        obj3[prop] = obj1[prop];
    }
}

export function getArrayCopy(arr){
    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        arr1[i] = arr[i];
    }
    return arr1;
}