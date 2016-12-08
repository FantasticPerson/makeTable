/**
 * Created by wdd on 2016/12/8.
 */
import React,{Component,PropTypes} from 'react'

export default class CheckSelector extends Component{
    constructor(){
        super();
    }

    getValue(){
        const {valueArray} = this.props;
        let valueArr = [];
        for(let i=0;i<valueArray.length;i++) {
            valueArr.push(this.refs['checkbox'+i].checked);
        }
        return valueArr;
    }

    render(){
        let arr = [];
        const {valueArray,selectedArray} = this.props;
        valueArray.map((item,index)=>{
            let defaultValue = selectedArray[index] ? selectedArray[index] : false;
            arr.push(<input key={index} ref={"checkbox"+index} type="checkbox" defaultChecked={defaultValue} value={item}/>);
            arr.push(item);
        });
        return (
            <div>
                {arr}
            </div>
        )
    }
}