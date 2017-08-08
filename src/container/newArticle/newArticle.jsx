import React, {Component} from 'react';
import {Row, Col, Input, Button} from 'antd'
import BlogEdit from '../../components/edit/index.jsx';
import './index.scss'
// import '../../style/base.scss';
class NewArticle extends Component {
    render() {
        return (
            <div className="publish-article blog-flex blog-flex-row-y">
                <Input size="large" placeholder="...标题"/>
                <Input className="article-label" size="large" placeholder="...标签"/>
                <div className="edit-wrap ">
                    <Row className="text-body">
                        <Col className="text-body blog-edit" span={12}>
                            <BlogEdit/>
                        </Col>
                        <Col className="text-body" span={12}>
                            <div className="preview"></div>
                        </Col>
                    </Row>
                </div>
                <div className="publish-btn">
                    <Button type="primary" icon="check-circle-o">发布</Button>
                </div>
            </div>
        );
    }
}

export default NewArticle;