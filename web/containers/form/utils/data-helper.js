/**
 * Created by wdd on 2016/12/2.
 */
export function stringifyRGBAObj(obj){
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
    if(arr1.length != arr2.length){
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
    let style = {color:stringifyRGBAObj(obj1.fontColor),fontFamily:obj1.fontFamily,fontSize:obj1.fontSize+'px'};
    let pStyle = {};
    if(ob2.color){
        pStyle.color = stringifyRGBAObj(ob2.color);
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
        item.style.marginLeft = style.marginTop + 'px';
    }
    if(style.width){
        item.style.width = style.width + 'px';
    }
    if(style.height) {
        item.style.height = style.height + 'px';
    }
}