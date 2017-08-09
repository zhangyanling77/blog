const ADD_EDITOR = "ADD_EDITOR"//初始化editor

export const addEditor = editorValue=>{
  return {
    type:ADD_EDITOR,
    editorValue
  }
}
