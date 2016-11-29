/**
 * Created by wdd on 2016/11/29.
 */
import * as actionHelper from '../utils/action-helper'
import * as ActionTypes from '../constants/ActionTypes'
import * as overLayNames from '../constants/OverLayNames'

export function updateFormStyle(style){
    return((dispatch)=> {
            dispatch(actionHelper.createPayloadAction(ActionTypes.update_form_style, style))
        }
    )
}