/**
 * Created by wdd on 2016/12/23.
 */
export function findItem(arr,prop,value){
    if(arr && arr.length > 0) {
        if (arr.find) {
            return arr.find(function (item) {
                return item[prop] == value;
            })
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][prop] == value) {
                    return arr[i];
                }
            }
        }
    }
}

export function getStrRepeat(str,times){
    let result = '';
    for(let i = 0;i<times;i++){
        result += str;
    }
    return result;
}