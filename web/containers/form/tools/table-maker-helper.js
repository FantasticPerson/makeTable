/**
 * Created by wdd on 2016/11/24.
 */
export function getMaxCommonDivisor(){
    let rowsArr = this.tds.map((item)=>{
        return item.posInfo.rows;
    });
    let mCD = 1;
    if(rowsArr.length >= 2){
        let mCD = maxGys(rowsArr[0],rowsArr[1]);
        for(let i=2;i<rowsArr.length;i++){
            mCD = maxGys(mCD,rowsArr[i]);
        }
    }
    return mCD;

    function maxGys(num1,num2) {
        let u=num1,v=num2,t=v;
        while(v!=0){
            t=u%v;
            u=v;
            v=t;
        }
        return u;
    }
}