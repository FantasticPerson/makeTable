/**
 * Created by wdd on 2016/12/5.
 */
import React,{Component,PropTypes} from 'react'

export default class NumberSetter extends Component{
    constructor() {
        super();
        this.state={min:0,max:1000,value:0};
    }

    getNumber(){
        const {numberSetter} = this.refs;
        return numberSetter.value;
    }

    onChange(e){
        const {beNumber} = this.state;
        const {numberSetter} = this.refs;
        if(beNumber){
            if(!isNaN(Number(numberSetter.value))){
                if(numberSetter.value != "") {
                    this.setState({value: numberSetter.value});
                }
            } else {
                numberSetter.value = this.state.value;
            }
        } else {
            this.setState({value: numberSetter.value});
        }
    }

    componentDidMount(){
        const {number,maxNum,minNum,beNumber} = this.props;
        const {max,min,value} = this.state;
        let state = {
            number:((number != undefined)?number:value),
            max:((maxNum != undefined)?maxNum:max),
            min:((minNum != undefined)?minNum:min),
            beNumber:((beNumber != undefined) ? beNumber : true)
        };
        this.setState(state);
    }

    render(){
        const {number} = this.props;
        return (
            <div className="abc-number-picker-container">
                <input type="text" className="abc-number-picker-container-input" ref="numberSetter" onChange={(e)=>{
                    this.onChange(e);
                }} defaultValue={
                    number ? number : ''
                } style={{width:'80px',height:'20px',border:'1px solid #ccc'}}/>
            </div>
        )
    }
}