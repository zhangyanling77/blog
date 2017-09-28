/*
 * @Author: wangcaowei
 * @Date: 2017-09-06 00:19:53
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-29 01:15:20
 */
const path = require("path");
const sequelize = require("../db/db");
const articleMod = sequelize.import(
    path.join(__dirname, "../models/articles.js")
);
const tagsMod = sequelize.import(path.join(__dirname, "../models/tags.js"));

//获取文章列表 
exports.getArticleList = async(tagId) => {
    articleMod.belongsToMany(tagsMod, { through: "articletagrelate" });
    tagsMod.belongsToMany(articleMod, { through: "articletagrelate" });
    let articleIds = [];
    // 有tagid 根据id查询相关信息
    if (tagId) {
        const articleListByTagId = await articleMod.findAll({
            attributes: ['id'],
            include: [{
                model: tagsMod,
                through: {
                    attributes: []
                },
                attributes: [],
                where: { id: tagId }
            }]
        })
        articleIds = articleListByTagId.map(ele => ele.id);
    }
    //多对多的查询
    const articleList = await articleMod.findAll({
        attributes: [
            "id",
            "title",
            "content",
            "createTime",
            "updateTime",
            "userid"
        ],
        include: [{
            model: tagsMod,
            through: {
                attributes: []
            },
        }],
        order: [
            ["updateTime", "DESC"]
        ],
        where: (() => {
            return tagId ? {
                id: {
                    $in: articleIds
                }
            } : {};
        })()
    });
    return articleList;
};