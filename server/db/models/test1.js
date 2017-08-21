/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test1', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    emp_id: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    nick: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    tableName: 'test1'
  });
};
