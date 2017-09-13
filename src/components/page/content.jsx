import React, {Component} from "react";
import { connect } from 'react-redux'
import Article from "../artic/article.jsx";
import { getAllList } from '../../actions/action.js'
class Content extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        this.props.getAllList();
    }
    
    render() {
        let articles = this
            .props
            .articleList
            .map((ele, index) => {
                return <Article key={index} article={ele}/>
            })
        return (
            <div className="blog-flex blog-flex-row-y">
                {articles}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {articleList: state.article.articleList}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllList: () => {
            dispatch(getAllList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Content)