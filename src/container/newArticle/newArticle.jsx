/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:58:14
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-25 10:17:58
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Input, Button} from 'antd'
import BlogEdit from '../../components/edit/index.jsx';
import {publishArticle} from '../../actions/action.js'
import './index.scss'
class NewArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }
    titleChange(e) {
        e.preventDefault();
        this.setState({title: e.target.value});
    }
    submitArticle(e) {
        e.preventDefault();
        let data = {
            acticleTitle: this.state.title,
            articleContent: this
                .refs
                .editor
                .state
                .editor
                .getValue()
        }
        this
            .props
            .publishArticle(data);
        this
            .props
            .history
            .push('/')
    }

    render() {
        return (
            <div className="publish-article blog-flex blog-flex-row-y">
                <Input
                    ref="articleTitle"
                    size="large"
                    placeholder="...标题"
                    onChange={:: this.titleChange}/>
                <Input className="article-label" size="large" placeholder="...标签"/>
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
        publishArticle: (data) => dispatch(publishArticle(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(NewArticle);
