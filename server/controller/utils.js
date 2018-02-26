/*
 * @Author: wangcaowei
 * @Date: 2017-09-06 00:19:53
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-26 17:58:26
 */
const path = require("path");
const sequelize = require("../db/db");
const articleMod = sequelize.import(path.join(__dirname, "../models/articles.js"));
const tagsMod = sequelize.import(path.join(__dirname, "../models/tags.js"));
const userMod = sequelize.import(path.join(__dirname, "../models/users.js"));
//获取文章列表
exports.getArticleList = async params => {
  articleMod.belongsToMany(tagsMod, { through: "articletagrelate" });
  tagsMod.belongsToMany(articleMod, { through: "articletagrelate" });
  let articleIds = [];
  // 有tagid 根据id查询相关信息
  if (params.tagId) {
    const articleListByTagId = await articleMod.findAll({
      attributes: ["id"],
      include: [
        {
          model: tagsMod,
          through: {
            attributes: []
          },
          attributes: [],
          where: { id: params.tagId }
        }
      ]
    });
    articleIds = articleListByTagId.map(ele => ele.id);
  }
  //多对多的查询
  const articleList = await articleMod.findAll({
    // articleMod 需要返回的字段
    attributes: ["id", "title", "content", "abstract", "createTime", "updateTime", "userid"],
    include: [
      {
        model: tagsMod,
        through: {
          attributes: []
        }
      }
    ],
    order: [["updateTime", "DESC"]],
    where: (() => {
      let whereCondition = {};
      // 有tagId的情况
      if (!!params.tagId) {
        whereCondition = {
          id: {
            $in: articleIds
          }
        };
      } else if (!!params.id) {
        // 有id的情况
        whereCondition = {
          id: params.id
        };
      }
      return whereCondition;
    })()
  });
  return articleList;
};

/**
 *
 *判断用户是否登录
 * @param {any} userName
 * @returns userinfo 或者 false
 */
exports.isLogin = async userName => {
  const userInfo = await userMod.find({ username });
  return;
};
