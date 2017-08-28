/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articletagrelate', {
    articleid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true
    },
    tagid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tags',
        key: 'id'
      }
    }
  }, {
    tableName: 'articletagrelate'
  });
};
