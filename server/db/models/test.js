/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    test: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: 'test'
    }
  }, {
    tableName: 'test'
  });
};
