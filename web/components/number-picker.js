/**
 * Created by wdd on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react'

export default class NumberPicker extends Component{
    constructor() {
        super();
        this.state = {number:0,max:50,min:0};
    }

    onClickAdd() {
        const {number,max} = this.state;
        if (number < max){
            this.setState({number:(number+1)});
        }
        this.setValue();
    }
    onClickReduce(){
        const {number,min} = this.state;
        if(number > min){
            this.setState({number:(number-1)});
        }
        this.setValue();
    }

    setValue(){
        setTimeout(function(){
            const {number} = this.state;
            const {input} = this.refs;
            input.value = number;
        }.bind(this),20)
    }

    onChange(e){
        const {input} = this.refs;
        this.setState({number:Number(input.value)})
    }

    componentDidMount(){
        const {value,maxNum,minNum} = this.props;
        const {number,max,min} = this.state;
        let state = {number:((value != undefined)?value:number),max:((maxNum != undefined)?maxNum:max),min:((minNum != undefined)?minNum:min)};
        this.setState(state);
        this.setValue();
    }

    getNumber(){
        return this.state.number;
    }

    render(){
        const {number} = this.state;
        return (
            <div className="abc-number-picker-container" style={{border:'1px solid #ccc'}}>
                <input ref="input" type="text" className="abc-number-picker-text" onChange={e=>{this.onChange(e)}} style={{borderWidth:'0'}} defaultValue={number}/>
                <div style={{display:'flex'}}>
                    <div className="abc-number-picker-add-btn" onClick={()=>{this.onClickAdd()}}>{'+'}</div>
                    <div className="abc-number-picker-delete-btn" onClick={()=>{this.onClickReduce()}}>{'-'}</div>
                </div>
            </div>
        )
    }
}