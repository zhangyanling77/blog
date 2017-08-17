import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import "./article.scss";
import '../../style/base.scss'
export default class Artic extends Component {
    constructor(props) {
        super(props);

        this.previousLocation = this.props.location;
        this.state = {
            test:'test'
        }
    }
     componentWillUpdate(nextProps) {
       console.log(nextProps);
      //  const { location } = this.props
      //  // 如果 props.location 不是 modal 的话，就把 this.props.location
      //  // 赋值给 previousLocation。
      //  if (
      //    nextProps.history.action !== 'POP' &&
      //    (!location.state || !location.state.modal)
      //  ) {
      //    this.previousLocation = this.props.location
      //  }
     }
    render() {
        return (
            <Router>
                <div className="article">
                    <p className="article-title blog-overflow-ellipsis">
                        <Link to="/article-detail">{this.props.article.title}</Link>
                    </p>
                    <div className='article-content'>
                        <p className="blog-two-overflow-ellipsis">{this.props.article.content}</p>
                        <div className="article-info blog-flex blog-flex-justify">
                            <span>2012-2-2</span>
                            <span>回复</span>
                        </div>
                    </div>
                    <Route path="/" render={() =><div> home </div>}></Route>
                    <Route exact path="/article-detail" component={test}></Route>
                </div>
            </Router>
        )
    }
}
const test = ({match}) => (
    <div>
        test
    </div>
)
