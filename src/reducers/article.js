const article = (state = { articleList: [], currentArticle: {} }, action) => {
  switch (action.type) {
    case "GET_ALL_LIST":
      return Object.assign({}, state, { articleList: action.articleList });
    case "GET_ARTICLE_BY_ID":
      return Object.assign({}, state, { currentArticle: action.currentArticle });
    default:
      return state;
  }
};
export default article;
