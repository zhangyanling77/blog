const ADD_EDITOR = "ADD_EDITOR"//初始化editor

export const addEditor = editor=>{
  return {
    type:ADD_EDITOR,
    editor
  }
}
