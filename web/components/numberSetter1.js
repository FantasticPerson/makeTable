/**
 * Created by wdd on 2016/12/5.
 */
import React,{Component,PropTypes} from 'react'

export default class NumberSetter extends Component{
    constructor() {
        super();
    }

    getNumber(){
        const {numberSetter} = this.refs;
        return numberSetter.value;
    }

    render(){
        const {number} = this.props;
        return (
            <div className="abc-number-picker-container">
                <input type="text" className="abc-number-picker-container-input" ref="numberSetter" defaultValue={
                    number ? number : ''
                } style={{width:'80px',height:'20px',border:'1px solid #ccc'}}/>
            </div>
        )
    }
}