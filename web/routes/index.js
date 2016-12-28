/**
 * Created by dandan.wu on 16/9/13.
 */
import indexApp from '../containers/index'
import demoPage from './demoPage'
import formPage from './formPage'
import dbConfig from '../db'

const index = {
    path:'/',
    component:indexApp,
    onEnter:(nextState,replace,cb)=>{
        Promise.all([
            dbConfig()
        ]).then(([app_db])=>{
            cb();
        },err=>{
            console.error(err);
            console.error(console.error('app prepare error!'));
        });
    },
    childRoutes:[
        demoPage,
        formPage
    ],
    indexRoute: {
        onEnter: (nextState, replace)=>replace('/formPage')
    }

};

export default index;