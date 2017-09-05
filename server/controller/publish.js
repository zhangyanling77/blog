/*
 * @Author: wangcaowei
 * @Date: 2017-08-21 23:52:19
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-05 23:45:55
 */
const path = require('path')
const user = require('./user');
const sequelize = require('../db/db');
const articleMod = sequelize.import (path.join(__dirname, '../models/articles.js'));

exports.publish = async(ctx, next) => {
    await articleMod.create({title: 123, content: 123, updateTime: new Date(),userid:1})
    ctx.body = {
        code:200,
        message: '发表成功'
    }
}