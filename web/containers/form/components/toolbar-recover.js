/**
 * Created by wdd on 2016/12/9.
 */
import React,{Component,PropTypes} from 'react'

export default class ToolbarRecover extends Component {
    constructor(){
        super();
    }
    render(){
        const {importData,onRecoverFinish} = this.props;
        return (
            <div className="abc-form-tool-bar-edit-display-container" style={
                {
                    width: '180px',
                    height: '70px',
                    backgroundColor: '#fff',
                    border: '1px solid #eee',
                    marginLeft: '215px',
                    marginTop: '55px',
                    posInfo:'inherit'
                }}>
                <div className="abc-form-tool-bar-edit-display-container-header">
                    <div className="abc-form-tool-bar-edit-display-container-header-text">{'导入表格'}</div>
                </div>
                <div className="abc-form-tool-bar-edit-display-container-body">
                    <input type="file" accept='text/html' style={{marginTop:'10px',marginLeft:'10px'}} onChange={e=>{
                        let input = e.target;
                        let reader = new FileReader();
                        reader.onload=function(){
                            let text = reader.result;
                            let index = text.search(/<div class='recoverData' style='display: none'>/);
                            let recoverData = text.slice(index+"<div class='recoverData' style='display: none'>".length,-("\r\n\t</div>\r\n</html>".length));
                            importData(recoverData);
                            onRecoverFinish();
                        };
                        reader.readAsText(input.files[0]);
                    }}/>
                </div>
            </div>
        )
    }
}