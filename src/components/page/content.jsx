import React, {Component} from "react";
import Article from "../artic/artic.jsx";

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [
                {
                    id: 0,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: '发动机撒附加额外附加额啊我发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份觉得是附' +
                            '近的身份发动机撒附加额外附加额啊我发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份' +
                            '觉得是附近的身份发动机撒附加额外附加额啊我发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附' +
                            '近的身份觉得是附近的身份'
                }, {
                    id: 1,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: 'fda十分惊愕万分激动是多少积分为无发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份非就是发动机safe我'
                }, {
                    id: 2,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·金额哦i挖坟·',
                    content: 'fda开始放假额发的收费金额近啊范发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份围房价未来'
                }, {
                    id: 3,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: '飞机到是放发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份假饿了我放假的身份王府大' +
                            '厦附近'
                }, {
                    id: 4,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: '发到劲松附发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份近饿了我放假的萨芬joe' +
                            '我发的是看'
                }, {
                    id: 5,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: '附近的萨芬发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份饥饿疗法觉得是放假饿了就' +
                            '发多少'
                }, {
                    id: 6,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: '发动机撒附发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份加额外附加额啊我觉得是附' +
                            '近的身份'
                }, {
                    id: 7,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: 'fda十分发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份惊愕万分激动是多少积分为' +
                            '无非就是发动机safe我'
                }, {
                    id: 8,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: 'fda开始发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份放假额发的收费金额近啊范' +
                            '围房价未来'
                }, {
                    id: 9,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: '飞机到是放发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份发动机撒附加额外附加额啊我觉得是附近的身份假饿了我放假的身份王府大' +
                            '厦附近'
                }, {
                    id: 10,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: '发到劲松附近饿了我放假的萨芬joe我发的是看'
                }, {
                    id: 11,
                    title: '发的佛我付了首付就附件是都疯了十分激动了收费金额哦i挖坟·',
                    content: '附近的萨芬饥饿疗法觉得是放假饿了就发多少'
                }
            ]
        }
    }
    render() {
        let articles = this
            .state
            .articles
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