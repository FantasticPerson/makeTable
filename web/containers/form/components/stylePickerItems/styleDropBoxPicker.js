/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import ItemSelector from '../../../../components/itemSelector'

export default class StyleDropBoxPicker extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {itemSelector} = this.refs;
        return itemSelector.getSelectValue();
    }

    render(){
        const {title,groupData} = this.props;
        return (
            <div className="true-form-tool-bar-style-editor-font-family">
                <div style={{marginTop:'5px'}} className="true-form-tool-bar-style-editor-font-family-text">{title}</div>
                <div className="true-form-tool-bar-style-editor-font-family-container">
                    <ItemSelector ref='itemSelector' optionDataArray ={groupData}/>
                </div>
            </div>
        )
    }
}