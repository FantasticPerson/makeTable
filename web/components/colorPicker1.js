/**
 * Created by wdd on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'
import {HuePicker,AlphaPicker,Twitter} from 'react-color'

export default class ColorPicker1 extends Component{
    constructor(){
        super();
        this.colorArr = ['red','#123','#654','#234112','#ABC','#DEF','black'];
        this.state = {color:'#red'}
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
        const colorArr = this.colorArr.map((item,index)=>{
            const {color} = this.state;
            let border = '1px solid '+ (color == item ? '#999' :' #000');
            let marginLeft = index > 0 ? '3px' : '0';
            return <div key={index} style={{
                width:'15px',
                height:'15px',
                borderRadius:'3px',
                backgroundColor:item,
                marginLeft:marginLeft,
                border:border
            }} onClick={()=>{this.setState({color:item})}
            }></div>
        });
        const {color} = this.state;
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                {colorArr}
            </div>
        );
    }
}