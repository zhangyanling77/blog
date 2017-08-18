/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 12:58:58
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-18 17:06:51
 */
import api from '../config/api';
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
 * 测试redux action 中发送异步请求
 * @returns
 */
export const asyncActionTest = () => {
  return (dispatch) => {
    //开始请求
    dispatch(beginFetch());
    fetch(api.test)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => dispatch(fetchError()))
  }
}
