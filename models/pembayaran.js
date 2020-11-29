"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pembayaran.init(
    {
      idanakkos: DataTypes.INTEGER,
      bulan: DataTypes.INTEGER,
      tahun: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pembayaran",
    }
  );

  Pembayaran.associate = function (models) {
    Pembayaran.belongsTo(models.AnakKos, { foreignKey: "idanakkos" });
  };

  return Pembayaran;
};
