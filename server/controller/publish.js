/*
 * @Author: wangcaowei
 * @Date: 2017-08-21 23:52:19
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-06 00:09:54
 */
const path = require('path');
const user = require('./user');
const sequelize = require('../db/db');
const articleMod = sequelize.import (path.join(__dirname, '../models/articles.js'));

exports.publish = async(ctx, next) => {
    const params = ctx.request.body;
    /* 标题和内容不能为空 */
    Object.keys(params).some(key=>{
        if(!params[key]){
            ctx.throw(500,`${key} 不能为空！`)
            return true;
        }
    })
    await articleMod.create(Object.assign({},params,{createTime:new Date(),updateTime:new Date(),userid:1}))
    ctx.body = {
        code:200,
        message: '发表成功'
    }
}