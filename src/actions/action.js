/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 12:58:58
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-24 00:36:26
 */
import api from '../config/api';
require('fetch-stringify')
const qs = require('qs')
const ADD_EDITOR = "ADD_EDITOR" //初始化editor

export const addEditor = editorValue => {
  return {type: ADD_EDITOR, editorValue}
}

/**
 * redux 异步请求 测试
 * @param  dispatch
 */
const BEGIN = "BEGIN";
const beginFetch = () => ({type: BEGIN, status: 'begin fetch'})

const SUCCESS = "SUCCESS";
const fetchSuccess = (res) => ({type: SUCCESS, status: 'success request', data: res})

const ERROR = "ERROR";
const fetchError = () => ({type: ERROR, status: 'error request'})

/**
 *
 * 发表文章
 * @param {any} article 文章内容
 * @returns
 */
export const publishArticle = (article) => {
  console.log(article, 11)
  return (dispatch) => {
    //开始请求
    dispatch(beginFetch());
    fetch(api.publishArticle, {
        method: "post",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
        },
        // body: JSON.stringify(article)
        body:qs.stringify(article)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => dispatch(fetchError()))
  }
}
