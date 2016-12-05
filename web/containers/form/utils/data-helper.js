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