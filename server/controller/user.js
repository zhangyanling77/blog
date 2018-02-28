/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:13 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-01 03:40:44
 */
const path = require("path");
const sequelize = require("../db/db");
const utils = require("../controller/utils");
const userMod = sequelize.import(path.join(__dirname, "../models/users.js"));

/**
 * 登录
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
exports.login = async(ctx, next) => {
    const { username, password } = ctx.request.body;
    const user = await userMod.findOne({ where: { username, password } });
    ctx.body = {
        code: 200,
        user
    }
};

/**
 * 用户注册
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
exports.regist = async(ctx, next) => {
    const { username, password } = ctx.request.body;
    const isLogin = await utils.isLogin(userName);
    //已经注册
    if (isLogin) {
        ctx.body = {
            code: 200,
            message: '该名称不可用'
        }
    } else {
        const newUser = await userMod.create({ username, password });
        ctx.body = {
            code: 200,
            message: '注册成功'
        }
    }
}