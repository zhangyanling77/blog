import React from 'react';
import {connect} from 'react-redux'
import md from '../../config/markdownConfig.js'
import {Tag} from "antd";
import {getArticleList} from '../../actions/action.js'
import './index.scss'
const ArticleDetail = (props) => {
  let data = props.location.state.article;
  let tags = data
    .tags
    .map(tag => (
      <Tag color="blue" key={tag.id} onClick={()=>props.getArticleList(tag.id)}>
        {tag.tag}
      </Tag>
    ));
  return (
    <div className="article-detail">
      <h1>{data.title}</h1>
      <div className="article-info blog-flex blog-flex-justify">
        <div>{tags}</div>
        <div>
          <span>{data.createTime}</span>
          <span>{data.updateTime}</span>
        </div>
      </div>
      <div
        className=""
        dangerouslySetInnerHTML={{
        __html: md.render(data.content)
      }}></div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {editorValue: state.publishArticle.editorValue}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticleList: (tagId) => {
      dispatch(getArticleList(tagId))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ArticleDetail);