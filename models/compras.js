const db = require('../config/config');
const { Sequelize, DataTypes } = require('sequelize'); 


class Compras extends Sequelize.Model {};

Compras.init({
  idCompra: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  descripcionCompra: {
    allowNull: false,
    type: DataTypes.STRING
  },
  estadoCompra: {
    allowNull: true,
    type: DataTypes.STRING
  },
  fechaCompra: {
    allowNull: true,
    type: DataTypes.DATE
  }, 
  proveedores_idProveedor:{
    allowNull: true,
    type: DataTypes.INTEGER
  }
},{
    sequelize: db,
    modelName: 'Compras',
    tableName: 'compras',
    timestamps: false
});

module.exports = Compras;
    
