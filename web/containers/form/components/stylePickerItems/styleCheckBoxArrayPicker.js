/**
 * Created by wdd on 2016/12/8.
 */
import React,{Component,PropTypes} from 'react'
import CheckSelector from '../../../../components/checkSelector'

export default class StyleCheckBoxArrayPicker1 extends Component{
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
            <div style={{
                flexDirection:'row',
                alignItems:'center',
                display:'inline-flex',
                padding:'3px',
                width:'150px'
            }}>
                <div  style={{
                    marginTop: '3px',
                    marginRight: '3px',
                    width: '48px'
                }}>{title}</div>
                <div className="abc-form-tool-bar-style-editor-drop-box-picker">
                    <CheckSelector ref="itemSelector" selectedArray={selectedArray} valueArray={dataArray}/>
                </div>
            </div>
        )
    }
}