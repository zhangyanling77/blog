import React, {Component} from 'react';
// import {Editor, EditorState} from 'draft-js';
import Simditor from 'simditor';

class BlogEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editor:{}//编辑器对象
        }
    }
    componentDidMount() {
        let editor = new Simditor({
            textarea:this.refs.edit,
            toolbar: [
                'title',
                'bold',
                'italic',
                'underline',
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
    }

    render() {
        return (
                <textarea ref="edit"></textarea>
        );
    }
}

export default BlogEdit;
