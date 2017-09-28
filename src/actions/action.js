/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 12:58:58
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-29 00:32:27
 */
import api from '../config/api';
import type from './type';
require('fetch-stringify')
const qs = require('qs')
export const addEditor = editorValue => {
    return { type: type.ADD_EDITOR, editorValue }
}

/**
 *
 * 发表文章
 * @param {any} article 文章内容
 * @returns
 */
export const publishArticle = (article) => {
        return (dispatch) => {
            //开始请求
            fetch(api.publishArticle, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: qs.stringify(article)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.code == 200) {
                        window.location.href = "/"
                        getAllList();
                    }
                })
                .catch(error => console.error(error));
        }
    }
    /**
     * 
     * 获取所有文章列表
     * @returns 
     */
export const getArticleList = (tagId) => {
        console.log(tagId)
        return (dispatch) => {
            fetch(api.getArticleList, {
                method: 'post',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: tagId && qs.stringify({ tagId })
            }).then(res => res.json()).then(data => {
                dispatch({
                    type: type.GET_ALL_LIST,
                    articleList: data.articleList
                })
            }).catch(e => console.error(e))
        }
    }
    /**
     * 
     * 获取所有标签列表
     * @returns 
     */
export const getTagList = () => {
    return (dispatch) => {
        fetch(api.getTagList).then(res => res.json()).then(data => {
            dispatch({
                type: type.GET_TAG_LIST,
                tagList: data.tagList
            })
        }).catch(e => console.error(e))
    }
}