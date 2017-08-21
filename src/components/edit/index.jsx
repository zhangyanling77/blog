import React, {Component} from 'react';
import {connect} from 'react-redux';
import Simditor from 'simditor';
import {addEditor} from '../../actions/action.js';
class BlogEdit extends Component {
    constructor(props) {
        super(props);
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
        editor.on ('valuechanged', (e, src) =>this.props.addEditor(editor.getValue()));
    }

    render() {
        return (
            <textarea ref="edit"></textarea>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addEditor: (editorValue) => dispatch(addEditor(editorValue))
    }
}

export default connect(null, mapDispatchToProps)(BlogEdit)
