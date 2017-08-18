/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:59:25 
 * @Last Modified by: wangcaowei 
 * @Last Modified time: 2017-08-18 16:59:25 
 */
const asyncTest = (state = {
    status: ""
}, action) => {
    let type = action.type;
    if(type=='BEGIN'||type=="SUCCESS"||type=="ERROR"){
        return state = Object.assign({}, state, {status: action.status});
    }else{
        return state;
    }
}
export default asyncTest;