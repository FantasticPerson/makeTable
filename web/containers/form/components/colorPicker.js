/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {SliderPicker} from 'react-color'

export default class ColorPicker extends Component{
    constructor(){
        super();
        this.state = {color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        }}
    }

    onChange(color,event){
        this.setState({color:color.rgb});
    }

    render(){
        return (
            <div style={{width:'200px',height:'100px'}}>
                <SliderPicker color={this.state.color} onChange={this.onChange.bind(this)}/>
            </div>
        )
    }
}