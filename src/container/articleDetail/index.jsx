import React, { Component } from "react";
import { connect } from "react-redux";
import md from "../../config/markdownConfig.js";
import { Tag } from "antd";
import { getArticleList,getArticleById } from "../../actions/action.js";
import "./index.scss";
class ArticleDetail extends Component {
  constructor(props){
    super(props)
  }
  
  componentWillMount() {
    const id = this.props.location.state.article.id; 
    this.props.getArticleById(id)
  }
  
  render() {
    let data = this.props.location.state.article;
    let tags = data.tags.map(tag => (
      <Tag color="blue" key={tag.id} onClick={() => props.getArticleList(tag.id)}>
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
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { editorValue: state.publishArticle.editorValue };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticleList: tagId => {
      dispatch(getArticleList(tagId));
    },
    getArticleById:id=>{
      dispatch(getArticleById(id))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
