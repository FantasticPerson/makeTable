/**
 * Created by wdd on 2016/12/27.
 */
import models from '../models'
import migrations from './migrations'
import filterStoreIndex from '../utils/filterStoreIndex'
import Dexie from 'dexie'
import uppercaseCapitalChar from '../utils/uppercase-capital-char'

export default ()=>{
    let app_db=new Dexie('true_form');
    window.app_db = app_db;

    migrations.forEach((migration,ids)=>{
        migrationVersion(migration,app_db);
        binModelCls(migration.stores);
    });

    app_db.on('error', (err) => {
        console.error('Dexie App Error, ', err.stack || err);
    });

    return app_db.open()
        .then(()=>{
            return app_db;
        })
}

function migrationVersion(migration, app_db) {
    //ver
    if(isNaN(migration.ver)) {
        throw new Error('migrations ver is not number!');
    }

    let stores = migration.stores;
    if(!stores) {
        throw new Error('migrations stores is null!');
    }

    //format.
    let newStore = {};
    Object.keys(stores).forEach(storeName => {
        newStore[storeName] = filterStoreIndex(stores[storeName]).join(',');
    });

    let dexieVersionInst = app_db.version(1);
    dexieVersionInst.stores(newStore);

    //upgrade
    if(!migration.upgrade || typeof migration.upgrade !== 'function') {
        dexieVersionInst.upgrade(migration.upgrade);
    }
}

function binModelCls(stores) {
    Object.keys(stores).forEach(storeName => {
        let modelName = uppercaseCapitalChar(storeName);
        let modelCls = models[modelName];
        if(!modelCls) return;

        let storeIns = app_db[storeName];
        modelCls.store = storeIns;

        storeIns.mapToClass(modelCls, modelCls.schema);
    });
}