import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tag } from "antd";
import "./article.scss";
import "../../style/base.scss";
export default class Artic extends Component {
  constructor(props) {
    super(props);

    this.previousLocation = this.props.location;
  }
  componentWillUpdate(nextProps) {
    //  const { location } = this.props  // 如果 props.location 不是 modal 的话，就把
    // this.props.location  // 赋值给 previousLocation。  if ( nextProps.history.action
    // !== 'POP' &&    (!location.state || !location.state.modal)  ) {
    // this.previousLocation = this.props.location  }
  }
  render() {
    let tags = this.props.article.tags.map(tag => (
      <Tag color="blue" key={tag.id}>
        <a href="#">{tag.tag}</a>
      </Tag>
    ));
    return (
      <div>
        <div className="article">
          <p className="article-title blog-overflow-ellipsis">
            <Link to={`/article-detail/${this.props.article.id}`}>
              {this.props.article.title}
            </Link>
          </p>
          <p class="article-tag">{tags}</p>
          <div className="article-content">
            <p
              className="blog-two-overflow-ellipsis"
              dangerouslySetInnerHTML={{ __html: this.props.article.content }}
            />
            <div className="article-info blog-flex blog-flex-justify">
              <span>{new Date(this.props.article.createTime).toLocaleDateString().replace(/\//g,'-')}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
