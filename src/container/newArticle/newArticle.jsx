/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:58:14
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-10 16:51:31
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Input, Button, Select} from 'antd'
import BlogEdit from '../../components/edit/index.jsx';
import {publishArticle, getTagList} from '../../actions/action.js'
import './index.scss'
class NewArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            button: true, //是否禁用按钮
            selectTag: []
        };
    }
    titleChange(e) {
        e.preventDefault();
        this.setState({title: e.target.value});
    }
    submitArticle(e) {
        e.preventDefault();
        let data = {
            title: this.state.title,
            content: this
                .refs
                .editor
                .state
                .editor
                .getValue(),
            tag:this.state.selectTag
        }
        this
            .props
            .publishArticle(data);
    }
    selectChange(val) {
        console.log(val)
        this.setState({
            selectTag: val
                .map(ele => this.props.tagList[ele-1])
                .map(ele => ele.id)
        });
    }
    componentWillMount() {
        !this.props.tagList.length && this
            .props
            .getTagList();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
    }

    render() {
        let Option = Select.Option,
            tagList = this
                .props
                .tagList
                .map(tag => (
                    <Option key={tag.id}>{tag.tag}</Option>
                )),
        button = this.state.title && this.state.selectTag.length
            ? false
            : true;
        return (
            <div className="publish-article blog-flex blog-flex-row-y">
                <Input
                    ref="articleTitle"
                    size="large"
                    placeholder="...标题"
                    onChange={:: this.titleChange}/>
                <Select
                    mode="multiple"
                    style={{
                    width: '100%'
                }}
                    placeholder="选择标签"
                    onChange={:: this.selectChange}>
                    {tagList}
                </Select>
                <div className="edit-wrap ">
                    <Row className="text-body">
                        <Col className="text-body blog-edit" span={12}>
                            <BlogEdit ref="editor"/>
                        </Col>
                        <Col className="text-body" span={12}>
                            <div className="preview">{this.props.editorValue}</div>
                        </Col>
                    </Row>
                </div>
                <div className="publish-btn">
                    <Button
                        type="primary"
                        disabled={button}
                        icon="check-circle-o"
                        onClick={:: this.submitArticle}>发布</Button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {editorValue: state.publishArticle.editorValue, tagList: state.publishArticle.tagList}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        publishArticle: (data) => dispatch(publishArticle(data)),
        getTagList: () => dispatch(getTagList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(NewArticle);
