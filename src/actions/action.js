/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 12:58:58
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-02 02:02:04
 */
import api from "../config/api";
import type from "./type";
import { push } from "react-router-redux";
const qs = require("qs");
const headers = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
};

/**
 *
 * 发表文章
 * @param {any} article 文章内容
 * @returns
 */
export const publishArticle = article => {
    return dispatch => {
        //开始请求
        fetch(api.publishArticle, {
                method: "post",
                headers,
                body: qs.stringify(article)
            })
            .then(res => res.json())
            .then(data => {
                if (data.code == 200) {
                    dispatch(push("/"));
                    getAllList();
                }
            })
            .catch(error => console.error(error));
    };
};

/**
 *
 * 获取tag对应的文章列表
 * @returns
 */
export const getArticleList = tagId => {
    return dispatch => {
        fetch(api.getArticleList, {
                method: "post",
                headers,
                body: qs.stringify({ tagId })
            })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: type.GET_ALL_LIST,
                    articleList: data.articleList
                });
            })
            .catch(e => console.error(e));
    };
};

/**
 *
 * 获取所有标签列表
 * @param
 * @returns
 */
export const getTagList = () => {
    return dispatch => {
        fetch(api.getTagList)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: type.GET_TAG_LIST,
                    tagList: data.tagList
                });
            })
            .catch(e => console.error(e));
    };
};

/**
 *
 *  根据id获取文章内容
 * @param
 * @returns
 */

export const getArticleById = id => {
    return dispatch => {
        fetch(api.getArticleById, {
                method: "post",
                body: qs.stringify({ id }),
                headers
            })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: type.GET_ARTICLE_BY_ID,
                    currentArticle: data.articleList[0]
                });
            })
            .catch(err => console.log(err));
    };
};

/**
 *显示隐藏login
 * @param
 * @returns
 */

export const showLogin = currentStatue => ({
    type: type.SHOW_LOGIN,
    status: currentStatue
});
/**
 * 检查用户名是否已经被注册
 * 
 * @param {any} username 
 * @returns 
 */
export const checkRegist = username => {
    return fetch(api.checkRegist, {
            method: "POST",
            body: qs.stringify({ username }),
            headers
        })
        .then(res => res.json())
        // .then(data => data);
};
/**
 *用户注册
 * @param
 * @returns
 */
export const regist = userInfo => {
    return dispatch => {
        fetch(api.regist, {
                method: "POST",
                body: qs.stringify(userInfo),
                headers
            })
            .then(res => res.json())
            .then(data => console.log(data));
    };
};
/**
 * 登录
 *
 * @param {any} userInfo
 * @returns
 */
export const login = userInfo => {
    return dispatch => {
        fetch(api.login, {
                method: "POST",
                body: qs.stringify(userInfo),
                headers
            })
            .then(res => res.json())
            .then(data => console.log(data));
    };
};