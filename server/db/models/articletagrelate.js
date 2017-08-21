/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articletagrelate', {
    articleid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id'
      }
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
