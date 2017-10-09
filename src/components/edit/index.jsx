/*
 * @Author: wangcaowei
 * @Date: 2017-08-15 19:58:12
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-10-09 23:25:56
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';
import {addEditor} from '../../actions/action.js';
const {TextArea} = Input
class BlogEdit extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TextArea rows={20} onChange={:: this.props.onChange}/>
        );
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {     return { addEditor:
// (editorValue) => dispatch(addEditor(editorValue))     } }

export default BlogEdit
