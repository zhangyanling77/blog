const Sequelize = require('sequelize');
const {databaseConf} = require('../config/config')
const sequelize = new Sequelize(
    databaseConf.database,databaseConf.user,databaseConf.password,
    {
        hose:databaseConf.host,
        dialect:'mysql',
        pool:{
            max:5,
            min:0,
            idle:10000
        },
        dialectOptions: {
            multipleStatements: true//同时执行多条sql 语句
          }
    })
    module.exports =sequelize;