/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 12:58:58
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-06 00:48:26
 */
import api from '../config/api';
import type from './type';
import {push} from 'react-router-redux'
require('fetch-stringify')
const qs = require('qs')
export const addEditor = editorValue => {
  return {type: type.ADD_EDITOR, editorValue}
}

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
    fetch(api.publishArticle, {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
        body: qs.stringify(article)
      })
      .then(res => res.json())
      .then(data => {
        if(data.code==200){
          dispatch(push('/'));
        }
      })
      .catch(error => console.log(error));
  }
}
export const getAllList = ()=>{
  return (dispatch)=>{
    fetch(api.getAllList).then(res=>res.json()).then(data=>{
      dispatch({
        type:type.GET_ALL_LIST,
        articleList:data.list
      })
    })
  }
}