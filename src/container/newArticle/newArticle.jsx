/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:58:14 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-22 00:14:05
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Input, Button} from 'antd'
import BlogEdit from '../../components/edit/index.jsx';
import {asyncActionTest} from '../../actions/action.js'
import './index.scss'
class NewArticle extends Component {
    constructor(props) {
        super(props)
    }
    componentDidUpdate(prevProps, prevState) {}
    submitArticle(e) {
        e.preventDefault();
        //测试
        this
            .props
            .testAsyncFetch()
        //   this.props.history.push('/')
    }
    render() {
        return (
            <div className="publish-article blog-flex blog-flex-row-y">
                <Input size="large" placeholder="...标题"/>
                <Input className="article-label" size="·large" placeholder="...标签"/>
                <div className="edit-wrap ">
                    <Row className="text-body">
                        <Col className="text-body blog-edit" span={12}>
                            <BlogEdit/>
                        </Col>
                        <Col className="text-body" span={12}>
                            <div className="preview">{this.props.editorValue}</div>
                        </Col>
                    </Row>
                </div>
                <div className="publish-btn">
                    <Button type="primary" icon="check-circle-o" onClick={:: this.submitArticle}>发布</Button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {editorValue: state.publishArticle.editorValue}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        testAsyncFetch: () => dispatch(asyncActionTest())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewArticle);
