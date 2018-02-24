export default (showLogin = false, action) => {
  return (showLogin = action.type == "SHOW_LOGIN" ? !action.status : showLogin);
};
