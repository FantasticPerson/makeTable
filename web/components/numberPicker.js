/**
 * Created by wdd on 2016/11/23.
 */
import React,{Component,PropTypes} from 'react';

export default class NumberPicker extends Component{
    constructor(){
        super();
        this.state = {value:0}
    }

    add(){
        const {max} = this.props;
        const {value} = this.state;
        let valueAdd = value + 1 <= max ? value + 1 : value;
        this.setState({value:valueAdd});
    }

    reduce(){
        const {min} = this.props;
        const {value} = this.state;
        let valueReduce = value -1 >= min ? value -1 : value;
        this.setState({value:valueReduce});
    }

    componentDidMount(){
        const {defaultValue} = this.props;
        let value = defaultValue ? defaultValue : 0;
        this.setState({value:value});
    }

    render(){
        const {value} = this.state;
        return(
            <div className="true-form-number-picker-container">
                <input className="true-form-number-picker-input" type="text" value={value}/>
                <div className="true-form-number-picker-btn-container">
                    <div className="true-form-number-picker-add-btn" onClick={()=>{this.add()}}></div>
                    <div className="true-form-number-picker-reduce-btn" onClick={()=>{this.reduce()}}></div>
                </div>
            </div>
        )
    }
}

NumberPicker.PropTypes = {
    defaultValue:React.PropTypes.number,
    max:React.PropTypes.number,
    min:React.PropTypes.number
};