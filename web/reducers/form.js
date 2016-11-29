/**
 * Created by wdd on 2016/11/29.
 */
import * as ActionTypes from '../constants/ActionTypes';
import {actionPayloadReducer, nullReducer} from '../utils/reducer-helper';

export const formStyle = {
    [ActionTypes.update_form_style]:actionPayloadReducer
};