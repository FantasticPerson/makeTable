/**
 * Created by wdd on 2016/12/27.
 */
export default (indexes) => {
    return indexes
        .filter((index)=>{
            if(!index || '') return false;
            return !(index.charAt(0) === '!');
        })
}