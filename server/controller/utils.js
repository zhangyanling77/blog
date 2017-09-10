/*
 * @Author: wangcaowei 
 * @Date: 2017-09-06 00:19:53 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-10 15:54:32
 */
const path = require('path')
const sequelize = require('../db/db');
const article = sequelize.import (path.join(__dirname, '../models/articles.js'));
exports.getAllArticle = async()=>{
    const articleList = await article.findAll({order: [['updateTime', 'DESC']]});
    return articleList;
}