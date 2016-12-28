/**
 * Created by wdd on 2016/11/23.
 */
import FormPage from '../containers/form/index'
import {formDefaultStyle} from '../containers/form/const'
import {updateStyleList} from '../actions/form'

const formPage = {
    path: 'formPage',
    component: FormPage,
    onEnter: (nextState,replace,cb)=>{
        formPage.dispatch(updateStyleList(formDefaultStyle,cb,true));
    },
    onLeave: ()=>{
        console.log('formPage leave');
    }
};

export default formPage;