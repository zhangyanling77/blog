import React from 'react';
import { connect } from 'react-redux'
import './index.scss'
const ArticleDetail = (props)=>(
  <div className="artile-detail" dangerouslySetInnerHTML={{__html: props.editorValue}}>
  </div>
)
const mapStateToProps = (state,ownProps)=>{
  return{
    editorValue:state.publishArticle.editorValue
  }
}
export default connect(mapStateToProps)(ArticleDetail);