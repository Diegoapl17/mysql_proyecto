const db = require('../config/config');
const { Sequelize, DataTypes } = require('sequelize'); 
const Proveedores = require('./proveedores');


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
    allowNull: false,
    type: DataTypes.STRING
  },
  fechaCompra: {
    allowNull: false,
    type: DataTypes.DATE
  }, 
  proveedores_idProveedor:{
    type: DataTypes.INTEGER,
    references: {
        model:Proveedores,
        key: "idProveedor",
    },
  },
},{
    sequelize: db,
    modelName: 'Compras',
    tableName: 'compras',
    timestamps: false
});

module.exports = Compras;
    
