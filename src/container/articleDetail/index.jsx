/*
 * @Author: wangcaowei 
 * @Date: 2018-02-07 17:37:39 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-07 19:46:27
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import md from "../../config/markdownConfig.js";
import { Tag, Button } from "antd";
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
  editArticle(article) {
    this.props.history.push({ pathname: "/write-article", state: article });
  }
  render() {
    let article = this.props.article;
    let tags =
      article.tags &&
      article.tags.map(tag => (
        <Tag color="blue" key={tag.id} onClick={this.getArticleByTagId.bind(this, tag.id)}>
          {tag.tag}
        </Tag>
      ));
    return Object.keys(article).length ? (
      <div className="article-detail">
        <h1>{article.title}</h1>
        <div className="article-info blog-flex blog-flex-justify">
          <div>{tags}</div>
          <div>
            <span>创建日期: {new Date(article.createTime).toLocaleDateString()}</span>
            <span>修改日期: {new Date(article.updateTime).toLocaleDateString()}</span>
          </div>
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: md.render(article.content)
          }}
        />
        <div className="article-footer">
          <Button type="primary" icon="check-circle-o" onClick={() => this.editArticle(article)}>
            编辑
          </Button>
        </div>
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
