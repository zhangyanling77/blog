/*
 * @Author: wangcaowei 
 * @Date: 2017-08-15 19:58:12
 * @Last Modified by:   wangcaowei 
 * @Last Modified time: 2017-08-23 22:28:38 
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Simditor from 'simditor';
import {addEditor} from '../../actions/action.js';
class BlogEdit extends Component {
    constructor(props) {
        super(props);
        this.state={
            editor:{}
        }
    }
    componentDidMount() {
        let editor = new Simditor({
            textarea: this.refs.edit,
            toolbar: [
                'title',
                'bold',
                'italic',
                'underline',
                'code',
                'strikethrough',
                'color',
                'ol',
                'ul',
                'link',
                'alignment'
            ]
        });
        this.setState({
            editor
        });
        // editor.on ('valuechanged', (e, src) =>this.props.addEditor(editor.getValue()));
    }

    render() {
        return (
            <textarea ref="edit"></textarea>
        );
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         addEditor: (editorValue) => dispatch(addEditor(editorValue))
//     }
// }

export default BlogEdit
