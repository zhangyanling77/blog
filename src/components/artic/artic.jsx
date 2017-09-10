import React, {Component} from "react";
import {Link} from 'react-router-dom'
import "./article.scss";
import '../../style/base.scss'
export default class Artic extends Component {
    constructor(props) {
        super(props);

        this.previousLocation = this.props.location
    }

    componentWillUpdate(nextProps) {
        //  const { location } = this.props  // 如果 props.location 不是 modal 的话，就把
        // this.props.location  // 赋值给 previousLocation。  if ( nextProps.history.action
        // !== 'POP' &&    (!location.state || !location.state.modal)  ) {
        // this.previousLocation = this.props.location  }
    }
    render() {
        return (
            <div>
                <div className="article">
                    <p class="article-tag"></p>
                    <p className="article-title blog-overflow-ellipsis">
                        <Link to={`/article-detail/${this.props.article.id}`}>{this.props.article.title}</Link>
                    </p>
                    <div className='article-content'>
                        <p className="blog-two-overflow-ellipsis" dangerouslySetInnerHTML={{__html:this.props.article.content}}></p>
                        <div className="article-info blog-flex blog-flex-justify">
                            <span>2012-2-2</span>
                            <span>回复</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}