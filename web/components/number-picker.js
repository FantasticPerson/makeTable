/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'

export default class NumberPicker extends Component{
    constructor() {
        super();
        this.state = {number:1,max:50,min:1};
    }

    onClickAdd() {
        const {number,max} = this.state;
        if (number < max){
            this.setState({number:(number+1)});
        }
    }
    onClickReduce(){
        const {number,min} = this.state;
        if(number > min){
            this.setState({number:(number-1)});
        }
    }

    componentDidMount(){
        const {value,maxNum,minNum} = this.props;
        const {number,max,min} = this.state;
        let state = {number:((value != undefined)?value:number),max:((maxNum != undefined)?maxNum:max),min:((minNum != undefined)?minNum:min)};
        this.setState(state);
    }

    getNumber(){
        return this.state.number;
    }

    render(){
        const {number} = this.state;
        return (
            <div className="abc-number-picker-container" style={{border:'1px solid #ccc'}}>
                <div className="abc-number-picker-text">{number}</div>
                <div style={{display:'flex'}}>
                    <div className="abc-number-picker-add-btn" onClick={()=>{this.onClickAdd()}}>{'+'}</div>
                    <div className="abc-number-picker-delete-btn" onClick={()=>{this.onClickReduce()}}>{'-'}</div>
                </div>
            </div>
        )
    }
}