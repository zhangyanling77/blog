/*
 * @Author: wangcaowei
 * @Date: 2017-09-06 00:19:53
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-13 17:17:42
 */
const path = require("path");
const sequelize = require("../db/db");
const articleMod = sequelize.import(
  path.join(__dirname, "../models/articles.js")
);
const tagsMod = sequelize.import(path.join(__dirname, "../models/tags.js"));

//获取所有文章列表 
exports.getAllArticle = async () => {
  articleMod.belongsToMany(tagsMod, { through: "articletagrelate" });
  tagsMod.belongsToMany(articleMod, { through: "articletagrelate" });
  //   多对多的查询
  const articleList = await articleMod.findAll({
    attributes: [
      "id",
      "title",
      "content",
      "createTime",
      "updateTime",
      "userid"
    ],
    include: [
      {
        model: tagsMod,
        through: {
          attributes: []
        }
      }
    ],
    order: [["updateTime", "DESC"]]
  });
  return articleList;
};
