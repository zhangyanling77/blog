const publishArticle = (state = { tagList: [] }, action) => {
  switch (action.type) {
    /*
        永远都不应该去修改原来的state,
        应该返回一个新的state.
         MMP
       */
    case "GET_TAG_LIST":
      return Object.assign({}, state, { tagList: action.tagList });
    default:
      return state;
  }
};
export default publishArticle;
