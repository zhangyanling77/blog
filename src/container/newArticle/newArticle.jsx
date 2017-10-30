/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:58:14
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-10-30 18:17:14
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Button, Select } from "antd";
import BlogEdit from "../../components/edit/index.jsx";
import { publishArticle, getTagList } from "../../actions/action.js";
import md from "../../config/markdownConfig.js";
import "./index.scss";

const { TextArea } = Input;

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      button: true, //是否禁用按钮
      selectTag: [],
      markdown: "",
      html: ""
    };
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
      tag: this.state.selectTag
    };
    this.props.publishArticle(data);
  }
  selectChange(val) {
    this.setState({
      selectTag: val.map(ele => this.props.tagList[ele - 1]).map(ele => ele.id)
    });
  }
  componentWillMount() {
    !this.props.tagList.length && this.props.getTagList();
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState)
  }
  textareaChange(e) {
    this.setState({
      markdown: e.target.value,
      html: md.render(e.target.value)
    });
  }
  render() {
    let Option = Select.Option,
      tagList = this.props.tagList.map(tag => (
        <Option key={tag.id}>{tag.tag}</Option>
      )),
      button = this.state.title && this.state.selectTag.length ? false : true;
    return (
      <div className="publish-article blog-flex blog-flex-row-y">
        <Input
          ref="articleTitle"
          placeholder="...标题"
          style={{ marginBottom: 10 }}
          size="large"
          onChange={::this.titleChange}
        />
        <Select
          mode="multiple"
          style={{ marginBottom: 10 }}
          placeholder="选择标签"
          size="large"
          onChange={::this.selectChange}
        >
          {tagList}
        </Select>
        <TextArea placeholder="文章的摘要.." style={{ marginBottom: 10 }} />
        <div className="edit-wrap ">
          <Row className="text-body">
            <Col span={12}>
              <BlogEdit ref="editor" onChange={::this.textareaChange} />
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
          <Button
            type="primary"
            disabled={button}
            icon="check-circle-o"
            onClick={::this.submitArticle}
          >
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
