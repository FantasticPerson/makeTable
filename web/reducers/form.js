/**
 * Created by wdd on 2016/11/29.
 */
import * as ActionTypes from '../constants/ActionTypes';
import {actionPayloadReducer, nullReducer} from '../utils/reducer-helper';

export const formStyleList = {
    [ActionTypes.update_form_style_list]:actionPayloadReducer
};

export const formStyleId = {
    [ActionTypes.update_form_current_style_id]:actionPayloadReducer
};

export const formMaxId = {
    [ActionTypes.update_form_style_max_id]:actionPayloadReducer
};