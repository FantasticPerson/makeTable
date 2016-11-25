/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';

export default class ToolBar extends Component{
    constructor(){
        super();
    }

    render(){
        const {generate} = this.props;
        return(
            <div className="true-form-tool-bar-container">
                {this.props.children}
            </div>
        )
        // return(
        //     <div className="true-form-tool-bar-container">
        //         <div>{'插入表格'}</div>
        //         <div>
        //             {'行数:3，列数:3'}
        //             <button onClick={()=>{generate(3,3)}}>生成</button>
        //         </div>
        //     </div>
        // )
    }
}