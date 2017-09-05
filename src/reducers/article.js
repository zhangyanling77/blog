const article = (state={articleList:[]},action)=>{
    switch (action.type){
        case 'GET_ALL_LIST':
        return Object.assign({},state,{articleList:action.articleList});
        default:
        return state;
    }
}
export default article;