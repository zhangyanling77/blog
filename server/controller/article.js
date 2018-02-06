/*
 * @Author: wangcaowei 
 * @Date: 2017-09-06 23:19:30 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-06 11:40:10
 */
const path = require("path");
// const user = require('./user');
const utils = require("../controller/utils");
const sequelize = require("../db/db");
const articleMod = sequelize.import(path.join(__dirname, "../models/articles.js"));
const tagsMod = sequelize.import(path.join(__dirname, "../models/tags.js"));
exports.getArticleList = async (ctx, next) => {
  /**
   *  @param [id:根据文章id查找内容，tagId:根据tagId查找对应的列表, 没有参数则返回所有的文章列表]
   * @returns articleList
   */
  const articleList = await utils.getArticleList(ctx.request.body);
  ctx.body = {
    code: 200,
    articleList
  };
};
// 根据标签 查找文章列表
exports.getListByTag = async (ctx, next) => {
  articleMod.belongsToMany(tagsMod, { through: "articletagrelate" });
  tagsMod.belongsToMany(articleMod, { through: "articletagrelate" });
  const articleList = await articleMod.findAll({
    include: [
      {
        model: tagsMod,
        where: {
          id: 1
        }
      }
    ]
  });
};
exports.getArticle;
