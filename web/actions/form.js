/**
 * Created by wdd on 2016/11/29.
 */
import * as actionHelper from '../utils/action-helper'
import * as ActionTypes from '../constants/ActionTypes'

export function updateStyleList(styleList){
    return ((dispatch)=>{
        dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_list,styleList))
    })
}

export function updateCurrentStyleId(id){
    return ((dispatch)=>{
        dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_current_style_id,id))
    })
}

export function updateMaxId(id){
    return ((dispatch)=>{
        dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style_max_id,id));
    })
}