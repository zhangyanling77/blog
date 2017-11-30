import React, { Component } from "react";
import { connect } from "react-redux";
import md from "../../config/markdownConfig.js";
import { Tag } from "antd";
import { getArticleList, getArticleById } from "../../actions/action.js";
import "./index.scss";
class ArticleDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const id = this.props.location.state.article.id;
    this.props.getArticleById(id);
  }
  getArticleByTagId(tagId) {
    this.props.getArticleList(tagId);
    this.props.history.push("/");
  }

  render() {
    let data = this.props.article;
    let tags =
      data.tags &&
      data.tags.map(tag => (
        <Tag color="blue" key={tag.id} onClick={this.getArticleByTagId.bind(this, tag.id)}>
          {tag.tag}
        </Tag>
      ));
    return Object.keys(data).length ? (
      <div className="article-detail">
        <h1>{data.title}</h1>
        <div className="article-info blog-flex blog-flex-justify">
          <div>{tags}</div>
          <div>
            <span>创建日期: {new Date(data.createTime).toLocaleDateString()}</span>
            <span>修改日期: {new Date(data.updateTime).toLocaleDateString()}</span>
          </div>
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: md.render(data.content)
          }}
        />
      </div>
    ) : (
      <div>加载中...</div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editorValue: state.publishArticle.editorValue,
    article: state.article.currentArticle
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticleList: tagId => {
      dispatch(getArticleList(tagId));
    },
    getArticleById: id => {
      dispatch(getArticleById(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
