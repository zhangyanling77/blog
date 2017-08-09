const publishArticle = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EDITOR':
      /* 
        永远都不应该去修改原来的state,
        应该返回一个新的state.
         MMP
       */
      return Object.assign({},state,{editorValue:action.editorValue})
    default:
      return state;
  }
}
export default publishArticle;
