/*
 * @Author: wangcaowei
 * @Date: 2017-08-21 23:52:19
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-11 10:13:25
 */
const path = require('path');
const user = require('./user');
const utils = require('../controller/utils')
const sequelize = require('../db/db');
const articleMod = sequelize.import(path.join(__dirname, '../models/articles.js'));
const tagMod = sequelize.import(path.join(__dirname, '../models/tags.js'));
const articletagrelate = sequelize.import(path.join(__dirname, '../models/articletagrelate.js'));
exports.publish = async(ctx, next) => {
    const params = ctx.request.body;
    /* 标题，标签，内容不能为空 */
    Object
        .keys(params)
        .some(key => {
            if (typeof params[key] == "Object" && !params[key].length || !params[key]) {
                ctx.throw(500, `${key} 不能为空！`)
                return true;
            }
        })
        // 插入新的记录
    let articleId = await articleMod.create(Object.assign({}, params, {
            createTime: new Date(),
            updateTime: new Date(),
            userid: 1
        })).then(article => article.id)
        // 文章对应的标签
    let tags = await tagMod.findAll({
        where: {
            id: params.tag
        }
    }).then(tagList => tagList.map(ele => ele.id))
    console.log(tags)
    let tagData = params.tag.map(ele => ({ articleid: articleId, tagid: ele }));
    // 插入新的记录
    await articletagrelate.bulkCreate(tagData);
    ctx.body = {
        code: 200,
        message: '发表成功'
    }
}
exports.tagList = async(ctx, next) => {
    const tagList = await tagMod.findAll();
    ctx.body = {
        code: 200,
        tagList
    }
}