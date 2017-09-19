import React from 'react';
import {connect} from 'react-redux'
import md from '../../config/markdownConfig.js'
import {Tag} from "antd";
import './index.scss'
const ArticleDetail = (props) => {
  let data = props.location.state.article;
  console.log(data)
  let tags = data
    .tags
    .map(tag => (
      <Tag color="blue" key={tag.id}>
        <a href="#">{tag.tag}</a>
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
export default connect(mapStateToProps)(ArticleDetail);