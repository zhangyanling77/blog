/*
 * @Author: wangcaowei
 * @Date: 2017-08-15 19:58:12
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-14 01:19:01
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
            <div>
                <TextArea rows={20} onChange={:: this.props.onChange}/>
            </div>
        );
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {     return { addEditor:
// (editorValue) => dispatch(addEditor(editorValue))     } }

export default BlogEdit
