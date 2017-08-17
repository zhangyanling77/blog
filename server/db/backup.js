const {databaseConf} = require('../config/config')
const mysqlDump = require('mysqldump');

mysqlDump(Object.assign(databaseConf, {
    dest: __dirname + '/data.sql'
}), err => {
    if(err)
        console.log('backup database error');
})