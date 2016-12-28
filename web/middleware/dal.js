import {ERROR_TYPES} from '../utils/AppError';
import {myAssign} from '../utils/compatibaleApi'

function createDAO(opts = {}, cb) {
    let dao = Object.create(DAO.prototype);
    myAssign(dao, opts);
    // Object.assign(dao, opts);
    dao.timestamp = Date.now();
    dao.duration = 0;
    dao.callback = cb;
    return dao;
}

export function createLocalOnlyDAO(opts = {}, cb) {
    opts.accessType = AccessType.LOCAL_ONLY;
    return createDAO(opts, cb);
}

export function createRemoteOnlyDAO(opts = {}, cb) {
    opts.accessType = AccessType.REMOTE_ONLY;
    return createDAO(opts, cb);
}

export function createAutoDAO(opts = {}, cb) {
    opts.accessType = AccessType.AUTO;
    return createDAO(opts, cb);
}

export const AccessType = {
    LOCAL_ONLY: 0x000001,
    REMOTE_ONLY: 0x000010,
    AUTO: 0x001000
};

export let DAOProto = {
    constructor: DAO,

    accessType: AccessType.AUTO,

    getState: undefined,

    fromRemote: undefined,

    syncRemoteToLocal: undefined,

    fromLocal: undefined,

    onStart: undefined,

    onEnd: undefined,

    callback: undefined
};

function DAO() {
}
DAO.prototype = DAOProto;

export default ({dispatch,getState})=>next=>action=> {
    if (!(action instanceof DAO)) {
        return next(action);
    }

    action.getState = getState;
    action.dispatch = dispatch;

    new Promise((resolve) => {
        if (action.onStart) {
            action.onStart();
        }
        resolve();
    }).then(()=> {
        return executeDao(action)
    }).then(
        (val) => {
            action.duration = Date.now() - action.timestamp;
            if (__DEBUG__) {
                console.log(`DAL: duration: ${action.duration}ms`);
            }

            if (action.onEnd) {
                action.onEnd(val);
            }
            if (action.callback) {
                action.callback(null, val);
            }
        },
        (err) => {
            if (action.onEnd) {
                action.onEnd(err);
            }
            if (action.callback) {
                action.callback(err);
            }
        }
    ).catch((err) => {//the final error
        console.error('final err in dal and no process ------------------------------------' + err);
        setTimeout(()=> {
            console.error(err);
            throw err;
        });
    });
}

function executeDao(dao) {
    switch (dao.accessType) {
        case AccessType.AUTO:
            return executeDaoWithAuto(dao);
            break;
        case AccessType.LOCAL_ONLY:
            return executeDaoWithLocalOnly(dao);
            break;
        case AccessType.REMOTE_ONLY:
            return executeDaoRemoteOnly(dao);
            break;
        default:
            throw new Error(`Invalid NetworkAccessType ${dao.accessType}`);
            break;
    }
}

function filterRemoteError(err) {
    if (err.hasOwnProperty('type') &&
        (err.type === ERROR_TYPES.http_status_unauth ||
        err.type === ERROR_TYPES.http_status_api_notsupport_error)) {
        throw err;
    }
}

function executeDaoWithAuto(dao) {
    if (navigator.onLine) {
        return resolveProcessFn(dao, 'fromRemote')
            .then(val => {
                return resolveProcessFn(dao, 'syncRemoteToLocal', val);
            })
            .then(val => {
                return resolveProcessFn(dao, 'fromLocal', val);
            }, err => {
                filterRemoteError(err);
                return resolveProcessFn(dao, 'fromLocal');
            })

    } else {
        return resolveProcessFn(dao, 'fromLocal');
    }
}

function executeDaoWithLocalOnly(dao, val) {
    return resolveProcessFn(dao, 'fromLocal', val);
}

function executeDaoRemoteOnly(dao) {
    return resolveProcessFn(dao, 'fromRemote')
        .then(val => {
            return resolveProcessFn(dao, 'syncRemoteToLocal', val);
        })
        .then(val => {
            return resolveProcessFn(dao, 'fromLocal', val);
        }, err => {
            filterRemoteError(err);
            return err;
        })
}

function resolveProcessFn(dao, fnName, val) {
    let fn = dao[fnName];

    if (fn === undefined) {
        return Promise.resolve(val);
    } else if (typeof fn === 'function') {
        return Promise.resolve(dao[fnName](val));
    } else {
        return Promise.resolve(fn);
    }
}
