/**
 * Created by wdd on 2016/12/8.
 */
import React,{Component,PropTypes} from 'react'
import CheckSelector from '../../../../components/checkSelector'

export default class StyleCheckBoxArrayPicker extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {itemSelector} = this.refs;
        return itemSelector.getValue();
    }

    render(){
        const {title,dataArray,selectedArray} = this.props;
        return (
            <div className="abc-form-tool-bar-style-editor-drop-box-container">
                <div className="abc-form-tool-bar-style-editor-drop-box-text">{title}</div>
                <div className="abc-form-tool-bar-style-editor-drop-box-picker">
                    <CheckSelector ref="itemSelector" selectedArray={selectedArray} valueArray={dataArray}/>
                </div>
            </div>
        )
    }
}