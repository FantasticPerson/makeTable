/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';
import ToolbarEdit from './toolbar-edit'

export default class ToolBar extends Component{
    constructor(){
        super();
    }

    render(){
        const {style} = this.props;
        return(
            <div>
                <div className="true-form-tool-bar-container" style={style}>
                    <div className="tool-bar-left" style={{marginLeft:'10px',display:'flex'}}>
                        <div className="true-form-edit-edit-container">
                            <div className="true-form-edit-edit-icon"></div>
                            <div className="true-form-edit-edit-text">{'编辑'}</div>

                        </div>

                        <div className="true-form-custom-style-icon-container">
                            <div className="true-form-custom-style-icon"></div>
                            <div className="true-form-custom-style-text">{'自定义样式'}</div>
                        </div>
                        <div className="true-form-tool-icon-container">
                            <div className="true-form-tool-icon"></div>
                            <div className="true-form-tool-text">{'工具'}</div>
                        </div>
                    </div>
                    <div className="tool-bar-right" style={{display:'flex',marginRight:'30px'}}>
                        <div className="true-form-save-icon"></div>
                        <div className="true-form-print-icon" style={{marginLeft:'20px'}}></div>
                        <div className="true-form-question-icon" style={{marginLeft:'20px'}}></div>
                    </div>
                    {this.props.children}
                </div>
                <div className="true-form-sub-tool-bar-container">
                    <ToolbarEdit/>
                </div>
            </div>
        );
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