"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AnakKos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AnakKos.init(
    {
      nama: DataTypes.STRING,
      asal: DataTypes.STRING,
      nohp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AnakKos",
    }
  );

  AnakKos.associate = function (models) {
    AnakKos.hasMany(models.Pembayaran, { foreignKey: "idanakkos" });
  };

  return AnakKos;
};
