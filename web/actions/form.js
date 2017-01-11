/**
 * Created by wdd on 2016/11/29.
 */
import * as actionHelper from '../utils/action-helper'
import * as ActionTypes from '../constants/ActionTypes'
import {createAutoDAO} from '../middleware/dal'
import StyleModel from '../models/Style'
import TempModel from '../models/TempModule'
import {getMaxId} from '../containers/form/utils/data-helper'

export function addOrModifyStyle(style,cb){
    return createAutoDAO({
        syncRemoteToLocal: () => {
            return StyleModel.update(style);
        },
        fromLocal:()=>{
            return StyleModel.getAll();
        },
        onEnd:function(styles){
            this.dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_max_id,getMaxId(styles)));
            this.dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_list,styles));
        }
    },cb);
}

export function updateStyleList(styleList,cb,setCurrentId = false){
    return createAutoDAO({
        syncRemoteToLocal: () => {
            return StyleModel.initAdd(styleList);
        },
        fromLocal:()=>{
            return StyleModel.getAll();
        },
        onEnd:function(styles){
            if(setCurrentId && styles.length > 0){
                this.dispatch(updateCurrentStyleId(styles[0].id));
            }
            this.dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_max_id,getMaxId(styles)));
            this.dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_list,styles));
        }
    },cb);
}

export function deleteStyle(styleId,cb){
    return createAutoDAO({
        syncRemoteToLocal:()=>{
            return StyleModel.delete(styleId);
        },
        fromLocal:()=>{
            return StyleModel.getAll();
        },
        onEnd:function(styles){
            if(styles.length > 0){
                this.dispatch(updateCurrentStyleId(styles[0].id));
            }
            this.dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_max_id,getMaxId(styles)));
            this.dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_list,styles));
        }
    },cb);
}

export function resetStyleList(styleList,cb){
    return createAutoDAO({
        syncRemoteToLocal: () => {
            return StyleModel.resetStyles(styleList);
        },
        fromLocal:()=>{
            return StyleModel.getAll();
        },
        onEnd:function(styles){
            this.dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_max_id,getMaxId(styles)));
            this.dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_list,styles));
        }
    },cb);
}

export function updateCurrentStyleId(id){
    return ((dispatch)=>{
        dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_current_style_id,id))
    })
}

export function saveTempModule(id,data,cb){
    return createAutoDAO({
        syncRemoteToLocal:()=>{
            return TempModel.save({id:id,data:data});
        },
        fromLocal:()=>{
            return TempModel.get(id);
        },
        onEnd:function (tempModule) {

        }
    },cb);
}

export function deleteTempModule(id){
    return createAutoDAO({
        syncRemoteToLocal:()=>{
            return TempModel.delete(id);
        },
        onEnd:function(){
        }
    })
}

export function getTempModule(id,cb){
    return createAutoDAO({
        fromLocal:()=>{
            return TempModel.get(id);
        },
        onEnd:function(data = null){
            if(data){
                cb(data);
            }
        }
    })
}