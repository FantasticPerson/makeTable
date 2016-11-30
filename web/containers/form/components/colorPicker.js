/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {HuePicker,AlphaPicker} from 'react-color'

export default class ColorPicker extends Component{
    constructor(){
        super();
        this.state = {color: {r: '241', g: '112', b: '19', a: '1'}}
    }

    onChange(color){
        this.setState({color:color.rgb});
    }

    render(){
        const {color} = this.state;
        let colorString = 'rgba('+color.r+','+color.g+','+color.b+','+color.a+')';
        return (
            <div style={{width:'300px'}}>
                <HuePicker width={'300'} color={color} onChange={this.onChange.bind(this)}/>
                <div style={{marginTop:'10px'}}>
                    <AlphaPicker width={'300'} color={color} onChange={this.onChange.bind(this)}/>
                </div>
                <div style={{backgroundColor:colorString}} className="color-picker-color-cube"></div>
            </div>
        )
    }
}