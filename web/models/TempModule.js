/**
 * Created by wdd on 2016/12/29.
 */
export default class TempModule{
}

TempModule.store = null;

TempModule.save = function(data){
    return TempModule.store.put(data)
};

TempModule.delete = function(id){
    return TempModule.store.delete(id);
};

TempModule.get = function(id){
    return TempModule.store.get(id);
};