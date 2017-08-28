/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:19 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-29 01:24:55
 */
const path = require('path')
const user = require('./user');
const sequelize = require('../db/db');
const articleMod = sequelize.import(path.join(__dirname,'../models/articles.js'));
// sequelize.authenticate()
// .then(() => {
//   console.log('connected to DB');
// });

exports.publish=(ctx)=>{
    // console.dir(articleMod,articleMod.sarticleMod.save)
    const res = articleMod.create({title:123,content:123})
    console.log(res.title)
    // sequelize.save();
    ctx.body={
        status:200
    }
    // user.judgeLogin(ctx);
}