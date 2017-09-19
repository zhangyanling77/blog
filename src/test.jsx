import React from 'react';
import { connect } from 'react-redux'
const Test = (props)=>(
  <div dangerouslySetInnerHTML={{__html: props.editorValue}}>
  </div>
)
const mapStateToProps = (state,ownProps)=>{
  return{
    editorValue:state.publishArticle.editorValue
  }
}
export default connect(mapStateToProps)(Test);
