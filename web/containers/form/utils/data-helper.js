/**
 * Created by wdd on 2016/12/2.
 */
export function stringifyRGBAObj(obj){
    return obj;
    if(obj) {
        let ownPropertyArray = Object.getOwnPropertyNames(obj);
        let propertyArray = ['r', 'g', 'b', 'a'];
        for (let i = 0; i < propertyArray.length; i++) {
            if (ownPropertyArray.indexOf(propertyArray[i]) < 0) {
                console.warn('invalid rgba obj');
                return 'invalid';
            }
        }
        return 'rgba('+obj.r+','+obj.g+','+obj.b+','+obj.a+')';
    } else {
        return null;
    }
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

export function getStyleObj(obj1,ob2){
    let style = {
        color:obj1.fontColor,
        fontFamily:obj1.fontFamily,
        fontSize:obj1.fontSize+'px',
        fontStyleArray:obj1.fontStyleArray
    };
    let pStyle = {};
    if(ob2.fontWeight){
        pStyle.fontWeight = ob2.fontWeight;
    }
    if(ob2.textAlign){
        pStyle.textAlign = ob2.textAlign;
    }
    if(ob2.color){
        pStyle.color = ob2.fontColor;
    }
    if(ob2.fontSize){
        pStyle.fontSize = ob2.fontSize + 'px';
    }
    if(ob2.fontFamily){
        pStyle.fontFamily = ob2.fontFamily;
    }
    if(ob2.marginLeft){
        pStyle.marginLeft = ob2.marginLeft + 'px';
    }
    if(ob2.marginTop){
        pStyle.marginTop = ob2.marginTop + 'px';
    }
    if(ob2.width){
        pStyle.width = ob2.width + 'px';
    }
    if(ob2.height){
        pStyle.height = ob2.height + 'px';
    }
    if(ob2.fontStyleArray){
        pStyle.fontStyleArray = ob2.fontStyleArray;
    }
    if(pStyle.fontStyleArray){
        if(pStyle.fontStyleArray[0]){
            pStyle.fontWeight = 'bold';
        } else {
            pStyle.fontWeight = 'normal';
        }
        if(pStyle.fontStyleArray[1]){
            pStyle.fontStyle = 'italic'
        } else {
            pStyle.fontStyle = 'normal'
        }
    }
    return {...style,...pStyle};
}

export function setItemStyle(item,style){
    if(style.fontSize) {
        item.style.fontSize = style.fontSize+'px';
    }
    if(style.color) {
        item.style.color = stringifyRGBAObj(style.color);
    }
    if(style.fontFamily) {
        item.style.fontFamily = style.fontFamily;
    }
    if(style.marginTop){
        item.style.marginTop = style.marginTop + 'px';
    }
    if(style.marginLeft){
        item.style.marginLeft = style.marginLeft + 'px';
    }
    if(style.width){
        item.style.width = style.width + 'px';
    }
    if(style.height) {
        item.style.height = style.height + 'px';
    }
    if(style.fontWeight){
        item.style.fontWeight = style.fontWeight;
    }
    if(style.fontStyleArray){
        if(style.fontStyleArray[0]){
            item.style.fontWeight = 'bold';
        } else {
            item.style.fontWeight = 'normal';
        }
        if(style.fontStyleArray[1]){
            item.style.fontStyle = 'italic';
        } else {
            item.style.fontStyle = 'normal';
        }
    }
}

export function getStyleSet(style,styleObj){
    let cStyle = {};
    if(styleObj.color && stringifyRGBAObj(styleObj.color) != stringifyRGBAObj(style.color)){
        cStyle.color = styleObj.color;
    }
    if(styleObj.fontSize && style.fontSize != styleObj.fontSize){
        cStyle.fontSize = styleObj.fontSize;
    }
    if(styleObj.fontFamily && style.fontFamily != styleObj.fontFamily ){
        cStyle.fontFamily = styleObj.fontFamily;
    }
    if(styleObj.marginTop && style.marginTop != styleObj.marginTop){
        cStyle.marginTop = styleObj.marginTop;
    }
    if(styleObj.marginLeft && style.marginLeft != styleObj.marginLeft){
        cStyle.marginLeft = styleObj.marginLeft;
    }
    if(styleObj.width && style.width != styleObj.width){
        cStyle.width = styleObj.width;
    }
    if(styleObj.height && style.height != styleObj.height){
        cStyle.height = styleObj.height;
    }
    if(styleObj.dataArray && (!style.dataArray || !checkArrayEqual(style.dataArray,styleObj.dataArray)) && styleObj.dataArray.length>0){
        cStyle.dataArray = styleObj.dataArray;
    }
    if(styleObj.textAlign && (!style.textAlign || style.textAlign != styleObj.textAlign)){
        cStyle.textAlign = styleObj.textAlign
    }
    if(styleObj.fontWeight && style.fontWeight != styleObj.fontWeight){
        cStyle.fontWeight = styleObj.fontWeight;
    }
    if(styleObj.fontStyleArray && !checkArrayEqual(styleObj.fontStyleArray,style.fontStyleArray)){
        cStyle.fontStyleArray = styleObj.fontStyleArray;
    }
    return cStyle;
}

export function getArrayCopy(arr){
    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        arr1[i] = arr[i];
    }
    return arr1;
}