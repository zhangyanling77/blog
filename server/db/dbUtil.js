/*
 * @Author: wangcaowei
 * @Date: 2017-08-17 21:29:21
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-21 16:29:55
 */

const {databaseConf} = require('../config/config')
const mysqlDump = require('mysqldump');
const sequelize = require('./db');
const childProcess = require('pn/child_process')
const fs = require('pn/fs');

/**
 *  备份数据库生成sql文件
 */
 const dbBackUp = () => mysqlDump(Object.assign(databaseConf, {
     dest: __dirname + '/data.sql'
 }), err => {
     if (err) 
         console.log('backup database error');
     }
 )

/**
 * 向数据库导入备份的sql文件
 */
const execSqlFile = async()=>{
    try {
        const sqlString = await fs.readFile(__dirname+'/data.sql','utf-8');
        const res = await sequelize.query(sqlString)
    } catch (error) {
        console.log(error);
    }
}

/**
 * 根据数据库 生成对应的模型
 */
const createModelsFormDb = async()=>{
    try {
        const res = await childProcess.exec(`sequelize-auto -o ${__dirname}/models -d ${databaseConf.database} -h ${databaseConf.host} -u ${databaseConf.user} -p 3306 -x ${databaseConf.password} -e mysql`);
    } catch (error) {
        console.log(error)
    }
}