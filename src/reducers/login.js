/*
 * @Author: wangcaowei 
 * @Date: 2018-03-01 03:01:48 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-04 04:23:17
 */
let state = {
    showLogin: false,
    user: null
}
const user = (user, action) => {
    switch (action.type) {
        case "SAVE_USER_INFO":
            return Object.assign({}, user, { user: action.user })
            break;
        case "SHOW_LOGIN":
            return Object.assign({}, user, { showLogin: !action.status })
        default:
            return state;
    }
};
export default user;