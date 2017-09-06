/*
 * @Author: wangcaowei 
 * @Date: 2017-09-06 23:19:30 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-06 23:21:28
 */
const path = require('path');
// const user = require('./user');
const utils = require('../controller/utils')
const sequelize = require('../db/db');
const articleMod = sequelize.import (path.join(__dirname, '../models/articles.js'));

exports.getAllList = async(ctx,next)=>{
    const articleList = await utils.getAllArticle();
    ctx.body={
        code:200,
        articleList
    }
}