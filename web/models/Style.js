/**
 * Created by wdd on 2016/12/27.
 */
import {findItem} from '../utils/compatibaleApi'

export default class Style{
}

Style.store = null;

Style.initAdd = function(styleArr){
    return Promise.all(styleArr.map(style=>{
        return Style.store.get(style.id)
        .then(styleLocal=>{
            if(!styleLocal){
                return Style.store.put(style)
            }
            return Promise.resolve();
        })
   }))
};

Style.getAll = function(){
    return Style.store.toArray()
};

Style.resetStyles = function (styleList) {
    return Style.store.toArray()
        .then((results)=>{
            let itemsToDelete = [];
            results.map((result)=>{
                let item = findItem(styleList,'id',result.id);
                if(!item){
                    itemsToDelete.push(result);
                }
            });
            return itemsToDelete
        })
        .then((itemsToDelete)=>{
            Promise.all(itemsToDelete.map((item)=>{
                return Style.store.delete(item.id);
            }))
        })
        .then(()=>{
            Promise.all(styleList.map((item)=>{
                return Style.store.put(item);
            }))
        })
};

Style.update = function(style){
    return Style.store.put(style)
};

Style.delete = function(id){
    return Style.store.get(id)
        .then((result)=>{
            return Style.store.delete(result);
        })
};