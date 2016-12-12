/**
 * Created by wdd on 2016/12/1.
 */
import React,{Component,PropTypes} from 'react'
import ItemSelector from '../../../../components/itemSelector'

export default class StyleDropBoxPicker1 extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {itemSelector} = this.refs;
        return itemSelector.getValue();
    }

    render(){
        const {title,groupData,selectedValue} = this.props;
        return (
            <div style={{
                flexDirection:'row',
                alignItems:'center',
                display:'inline-flex',
                padding:'3px',
                width:'150px'
            }}>
                <div  style={{
                    marginTop: '-80px',
                    marginRight: '3px',
                    width: '48px'
                }}>{title}</div>
                <div className="abc-form-tool-bar-style-editor-drop-box-picker">
                    <ItemSelector ref='itemSelector' selectedValue={selectedValue} optionDataArray ={groupData}/>
                </div>
            </div>
        )
    }
}