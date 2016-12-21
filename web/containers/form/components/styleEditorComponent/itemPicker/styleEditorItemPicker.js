/**
 * Created by wdd on 2016/12/11.
 */
import React,{Component,PropTypes} from 'react'
import NumberPicker from '../../../../../components/number-picker'
import NumberSetter1 from '../../../../../components/numberSetter'
import CheckSelector from '../../../../../components/checkSelector'
import ItemSelector from '../../../../../components/itemSelector'
import ColorPicker1 from '../../../../../components/colorPicker1'
import OptionDataAddTool from '../../../../../components/optionDataAddTool'
import{
    editorCheckBoxPicker,
    editorColorPicker,
    editorDropBoxPicker,
    editorNumberPicker,
    editorNumberSetter,
    editorTextPicker,
    editorOptionPicker,
    editorTextAreaPicker} from '../../../const'

export default class  StyleEditorItemPicker extends Component{
    constructor(){
        super();
    }

    renderEditor(){
        const {type,data} = this.props;
        if(type == editorNumberPicker){
            return <NumberPicker ref="pickerItem" value={data ? data.size : 0}/>
        } else if(type == editorNumberSetter){
            return <NumberSetter1 ref="pickerItem" number={data ? data.number : 0}/>
        } else if(type == editorCheckBoxPicker){
            return <CheckSelector ref="pickerItem" valueArray={data.valueArray} selectedArray={data.selectedArray}/>
        } else if(type == editorDropBoxPicker){
            return <ItemSelector ref="pickerItem" optionDataArray={data.groupData} selectedValue={data.selectedValue}/>
        } else if(type == editorColorPicker){
            return <ColorPicker1 ref="pickerItem" color={data.color ? data.color : null}/>
        } else if(type == editorTextPicker){
            return <input style={{border: '1px solid rgb(204, 204, 204)'}} ref='pickerItem' type="text" defaultValue={(data.text?data.text:'')}/>
        } else if(type == editorOptionPicker){
            return <OptionDataAddTool ref='pickerItem' dataArray={data.dataArray ? data.dataArray:[]}/>
        } else if(editorTextAreaPicker){
            return <textarea style={{border: '1px solid rgb(204, 204, 204)',resize:'none'}} ref='pickerItem' defaultValue={(data.text?data.text:'')}/>
        }
    }

    getValue(){
        const {type} = this.props;
        const {pickerItem} = this.refs;
        if(type == editorNumberPicker || type == editorNumberSetter){
            return pickerItem.getNumber();
        } else if(type == editorColorPicker){
            return pickerItem.getColor();
        } else if(type == editorCheckBoxPicker || type == editorDropBoxPicker || type == editorOptionPicker){
            return pickerItem.getValue();
        } else if(type == editorTextPicker || type == editorTextAreaPicker){
            return pickerItem.value;
        }
    }

    render(){
        const {title,type} = this.props;
        let width = (type == editorColorPicker ? '250px' : (type == editorTextPicker ? '250px' : '144px'));
        if(type == editorOptionPicker || type == editorTextAreaPicker){
            width = '280px'
        }
        if(type == editorCheckBoxPicker && title != '文字样式'){
            width = '200px';
        }

        let marginTop = type == editorOptionPicker ? '-95px' : '3px';
        return (
            <div style={{
                flexDirection:'row',
                alignItems:'center',
                display:'inline-flex',
                padding:'3px',
                width:width
            }}>
                <div  style={{
                    marginTop: marginTop,
                    marginRight: '3px',
                    width: '50px'
                }}>{title}</div>
                <div className="abc-form-tool-bar-style-editor-drop-box-picker">
                    {this.renderEditor()}
                </div>
            </div>
        )
    }
}