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
                <input type="text" className="abc-number-picker-container-input" ref="numberSetter" defaultValue={number ? number : ''}
                   onKeyDown={(e)=>{
                    let code = e.which;
                    if ((code < 48 || code > 57) && code != 8 && code != 190) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }}/>
            </div>
        )
    }
}