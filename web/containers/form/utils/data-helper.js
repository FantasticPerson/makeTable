/**
 * Created by wdd on 2016/12/2.
 */
export function stringifyRGBAObj(obj){
    let ownPropertyArray = Object.getOwnPropertyNames(obj);
    let propertyArray = ['r','g','b','a'];
    for(let i=0;i<propertyArray.length;i++){
        if(ownPropertyArray.indexOf(propertyArray[i]) < 0){
            console.warn('invalid rgba obj');
            return 'invalid';
        }
    }
    return 'rgba('+obj.r+','+obj.g+','+obj.b+','+obj.a+')';
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