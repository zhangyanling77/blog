import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Row, Col, Input, Button} from 'antd'
import BlogEdit from '../../components/edit/index.jsx';
import './index.scss'
// import '../../style/base.scss';
class NewArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            test:123123
        }
    }
    componentDidUpdate(prevProps, prevState) {
    }
    submitArticle(e){
      e.preventDefault();
      this.props.history.push('/')
      console.log(this.refs)
    }
    componentDidMount() {
    }
    
    render() {
        return (
            <div className="publish-article blog-flex blog-flex-row-y">
                <Input size="large" placeholder="...标题"/>
                <Input className="article-label" size="·large" placeholder="...标签"/>
                <div className="edit-wrap ">
                    <Row className="text-body">
                        <Col className="text-body blog-edit" span={12}>
                            <BlogEdit ref="aa" />
                        </Col>
                        <Col className="text-body" span={12}>
                            <div className="preview">{ this.props.editorValue }</div>
                        </Col>
                    </Row>
                </div>
                <div className="publish-btn">
                    <Button type="primary" icon="check-circle-o" onClick={::this.submitArticle}>发布</Button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editorValue: state.publishArticle.editorValue,
    }
}
export default connect(mapStateToProps)(NewArticle);
