/*
 * @Author: wangcaowei 
 * @Date: 2018-03-01 03:01:48 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-01 22:46:29
 */
export default (showLogin = false, action) => {
    return (showLogin = action.type == "SHOW_LOGIN" ? !action.status : showLogin);
};