/**
 * Created by wdd on 2016/12/5.
 */
import React,{Component,PropTypes} from 'react'

export default class OptionDataAddTool extends Component{
    constructor(){
        super();
        this.state = {dataArray: []};
        this.id = 0;
    }

    renderOptions(){
        const {dataArray} = this.state;
        const optionArray = dataArray.map((item,index)=>{
            return(
                <div className="abc-option-item-container" key={index}>
                    <div className="abc-option-item-text">{item}</div>
                    <div className="abc-option-item-del-btn" onClick={()=>{this.onDeleteClick(item)}}>{'删除'}</div>
                </div>
            )
        });
        return (
            <div>
                {optionArray}
            </div>
        )
    }

    getValue(){
        return this.state.dataArray;
    }

    onAddClick(){
        const {dataArray} = this.state;
        const {keyText} = this.refs;
        if(keyText.value != "" && dataArray.indexOf(keyText.value) < 0){
            dataArray.push(keyText.value);
            this.setState({dataArray:dataArray});
            keyText.value = "";
        }
    }

    componentDidMount(){
        const {dataArray} = this.props;
        if(dataArray && dataArray.length > 0){
            this.setState({dataArray:dataArray});
        }
    }

    onDeleteClick(value){
        const {dataArray} = this.state;
        let index = dataArray.indexOf(value);
        if(index >= 0){
            dataArray.splice(index,1);
            this.setState({dataArray:dataArray});
        }
    }

    render(){
        return (
            <div className="abc-option-data-add-container">
                <div className="abc-option-data-add-add-container">
                    <input style={{height:'20px',width:'130px',border:'1px solid rgb(204, 204, 204)'}} type="text" ref={'keyText'}/>
                    <div className="abc-option-data-data-add-btn" onClick={()=>{this.onAddClick()}}>{'添加'}</div>
                </div>
                <div className="abc-option-data-array-container">
                    {this.renderOptions()}
                </div>
            </div>
        )
    }
}