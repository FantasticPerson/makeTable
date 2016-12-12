/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'

export default class ItemSelector extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {itemSelector} = this.refs;
        let index = itemSelector.selectedIndex;
        return itemSelector.options[index].value;
    }

    render() {
        const {optionDataArray,selectedValue} = this.props;
        const optionArr = optionDataArray.map((item, index)=> {
            return (<option key={index} value={item.value}>{item.text}</option>)
        });
        return (
            <select style={{width:'80px',height:'20px'}} defaultValue={selectedValue} ref="itemSelector">
                {optionArr}
            </select>
        );
    }
}