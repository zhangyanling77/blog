import React from 'react';
import './index.scss'
const ArticleDetail = (props)=>(
  <div className="artile-detail">
    fdsfds
  </div>
)
const mapStateToProps = (state,ownProps)=>{
  return{
    editorValue:state.publishArticle.editorValue
  }
}
export default connect(mapStateToProps)(ArticleDetail);