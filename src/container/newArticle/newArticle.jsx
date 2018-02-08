/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:58:14
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-08 17:41:03
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Button, Select } from "antd";
import { publishArticle, getTagList } from "../../actions/action.js";
import asyncComponent from "../../bundle.js";
import md from "../../config/markdownConfig.js";
import "./index.scss";

const { TextArea } = Input;

class NewArticle extends Component {
  constructor(props) {
    super(props);
    let { state } = props.history.location;
    this.state = {
      title: state ? state.title : "",
      abstract: state ? state.abstract : "",
      selectTag: ['1', '2', '3'],
      markdown: state ? state.content : "",
      button: true, //是否禁用按钮
      html: ""
    };
  }
  componentDidMount() {
    console.log(this.state);
    !this.props.tagList.length && this.props.getTagList();
  }
  componentWillReceiveProps(nextProps) {
    this.forceUpdate();
  }
  titleChange(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }
  submitArticle(e) {
    e.preventDefault();
    let data = {
      title: this.state.title,
      content: this.state.markdown,
      abstract: this.state.abstract,
      tag: this.state.selectTag
    };
    this.props.publishArticle(data);
  }
  selectChange(val) {
    console.log(this.state.selectTag, this.props.tagList);
    this.setState(
      {
        selectTag: val.map(ele => this.props.tagList[ele - 1]).map(ele => ele.id)
      },
      () => console.log(this.state.selectTag)
    );
  }
  // markdown textarea
  textareaChange(e) {
    this.setState({
      markdown: e.target.value,
      html: md.render(e.target.value)
    });
  }
  // 摘要textarea
  abstractTextareaChange(e) {
    e.preventDefault();
    this.setState({
      abstract: e.target.value
    });
  }
  render() {
    let Option = Select.Option,
      tagList = this.props.tagList.map(tag => <Option key={tag.id}>{tag.tag}</Option>),
      button = this.state.title && this.state.selectTag.length ? false : true;
    return (
      <div className="publish-article blog-flex blog-flex-row-y">
        <Input ref="articleTitle" placeholder="...标题" style={{ marginBottom: 10 }} size="large" defaultValue={this.state.title} onChange={::this.titleChange} />
        <Select mode="multiple" defaultValue={this.state.selectTag} style={{ marginBottom: 10 }} placeholder="选择标签" size="large" onChange={::this.selectChange}>
          {tagList}
        </Select>
        <TextArea placeholder="文章的摘要.." defaultValue={this.state.abstract} style={{ marginBottom: 10 }} onChange={::this.abstractTextareaChange} />
        <div className="edit-wrap ">
          <Row className="text-body">
            <Col span={12}>
              <TextArea rows={20} defaultValue={this.state.markdown} onChange={::this.textareaChange} />
            </Col>
            <Col span={12}>
              <div
                className="preview"
                dangerouslySetInnerHTML={{
                  __html: this.state.html
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="publish-btn">
          <Button type="primary" disabled={button} icon="check-circle-o" onClick={::this.submitArticle}>
            发布
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { tagList: state.publishArticle.tagList };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    publishArticle: data => dispatch(publishArticle(data)),
    getTagList: () => dispatch(getTagList())
  };
};
export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true
})(NewArticle);
