/**
 * Created by wdd on 2016/12/14.
 */
import React,{Component,PropTypes} from 'react'
import ModuleItem from './moduleItem'

export default class ModuleContainer extends Component{
    constructor(){
        super();
    }

    render(){
        const {moduleArray,importDataFromModule} = this.props;

        let moduleItemArray = moduleArray.map((item,index)=>{
            return (
                <div key={index} style={{
                    width: '180px',
                    height: '250px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ModuleItem data={item} key={index} classNames={'table_module_'+(index+1)} importDataFromModule={importDataFromModule}/>
                </div>
            )
        });
        let moduleItemGroups = [];
        for(let i=0;i<moduleItemArray.length/2;i++){
            moduleItemGroups.push(moduleItemArray.slice(2*i,2*(1+i)));
        }

        let groups = moduleItemGroups.map((item,index)=>{
            return(
                <div style={{
                    height: '540px',
                    width: '180px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginRight:'50px',
                    marginLeft:'50px'
                }} key={index}>
                    {item}
                </div>
            )
        });


        return (
            <div  style={{
                marginTop: '10px',
                overflow: 'auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                {groups}
            </div>
        )
    }
}