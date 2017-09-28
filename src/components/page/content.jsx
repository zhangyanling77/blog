import React, {Component} from "react";
import { connect } from 'react-redux'
import Article from "../artic/article.jsx";
import { getArticleList } from '../../actions/action.js'
class Content extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        this.props.getArticleList();
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
        getArticleList: () => {
            dispatch(getArticleList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Content)