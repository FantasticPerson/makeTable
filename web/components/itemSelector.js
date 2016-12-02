/**
 * Created by wdd on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'

export default class ItemSelector extends Component{
    constructor(){
        super();
    }

    getSelectValue(){
        const {itemSelector} = this.refs;
        let index = itemSelector.selectedIndex;
        return itemSelector.options[index].value;
    }

    render() {
        const {optionDataArray} = this.props;
        const optionArr = optionDataArray.map((item, index)=> {
            return (<option key={index} value={item.value}>{item.text}</option>)
        });
        return (
            <select style={{width:'120px',height:'30px'}} ref="itemSelector">{optionArr}</select>
        );
    }
}