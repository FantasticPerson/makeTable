/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {HuePicker,AlphaPicker,Twitter} from 'react-color'
import {stringifyRGBAObj} from '../containers/form/utils/data-helper'

export default class ColorPicker extends Component{
    constructor(){
        super();
        this.state = {color: {r: '241', g: '112', b: '19', a: '1'}}
    }

    onChange(color){
        this.setState({color:color.rgb});
    }

    getColor(){
        return this.state.color;
    }

    componentDidMount(){
        const {color} = this.props;
        if(color) {
            this.setState({color: color});
        }
    }

    render(){
        const {color} = this.state;
        let style = {width:'20px',height:'20px',borderRadius:'3px',marginTop:'10px',backgroundColor:stringifyRGBAObj(color)};
        return (
            <div style={{width:'200px'}}>
                <HuePicker width={'200px'} color={color} onChange={this.onChange.bind(this)}/>
                <div style={{marginTop:'10px'}}>
                    <AlphaPicker width={'200px'} color={color} onChange={this.onChange.bind(this)}/>
                </div>
                <div style={style}></div>
            </div>
        );
    }
}