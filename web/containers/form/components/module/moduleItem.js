/**
 * Created by wdd on 2016/12/14.
 */
import React,{Component,PropTypes} from 'react'

export default class ModuleItem extends Component{
    constructor(){
        super();
    }

    render(){
        const {data,classNames,importDataFromModule} = this.props;
        return(
            <div style={{cursor:'pointer'}} className={classNames} onDoubleClick={()=>{
                importDataFromModule(data);
            }}>
            </div>
        )
    }
}