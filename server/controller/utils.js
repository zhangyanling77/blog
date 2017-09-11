/*
 * @Author: wangcaowei
 * @Date: 2017-09-06 00:19:53
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-11 18:04:00
 */
const path = require('path')
const sequelize = require('../db/db');
const articleMod = sequelize.import (path.join(__dirname, '../models/articles.js'));
const tagsMod = sequelize.import (path.join(__dirname, '../models/tags.js'));
const articletagrelateMod = sequelize.import (path.join(__dirname, '../models/articletagrelate.js'))

exports.getAllArticle = async() => {
    // articletagrelateMod.belongsTo(articleMod,{foreignKey:'articleid'})
    articleMod.hasOne(articletagrelateMod);
    tagsMod.hasOne(articletagrelateMod);
    const articleList = await articleMod.findAll({
        include: [
            {
                model: articletagrelateMod,
            },
            {
                {
                    model: articletagrelateMod,
                    where: {
                        articleid: 33
                    }
                }, 
            }
        ],
        order: [
            ['updateTime', 'DESC']
        ]
    });
    console.log(articleList)
    return articleList;
}