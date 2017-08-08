const publishAritcle = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EDITOR':
      return state.editor = action.editor;
    default:
      return state;
  }
}
export default publishAritcle;
