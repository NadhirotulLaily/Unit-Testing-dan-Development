'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employment.init({
    nama: DataTypes.INTEGER,
    field: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employment',
  });
  return Employment;
};