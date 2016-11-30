/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'

export default class NumberPicker extends Component{
    constructor() {
        super();
        this.state = {number:1};
    }

    onClickAdd() {
        const {number} = this.state;
        if (number < 50){
            this.setState({number:(number+1)});
        }
    }
    onClickReduce(){
        const {number} = this.state;
        if(number > 1){
            this.setState({number:(number-1)});
        }
    }

    componentDidMount(){
        const {value} = this.props;
        if(value){
            this.setState({number:value});
        }
    }

    getNumber(){
        return this.state.number;
    }

    render(){
        const {onChange} = this.props;
        const {number} = this.state;
        return (
            <div className="number-picker-container">
                <div className="number-picker-text">{number}</div>
                <div className="number-picker-btn-container">
                    <div className="number-picker-add-btn" onClick={()=>{this.onClickAdd()}}>{'+'}</div>
                    <div className="number-picker-delete-btn" onClick={()=>{this.onClickReduce()}}>{'-'}</div>
                </div>
            </div>
        )
    }
}