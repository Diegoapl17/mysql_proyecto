const db = require('../config/config');
const { Sequelize, DataTypes } = require('sequelize'); 


class Proveedores extends Sequelize.Model {};

Proveedores.init({
  idProveedor: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  correoProveedor: {
    allowNull: true,
    type: DataTypes.STRING
  },
  nombreProveedor: {
    allowNull: true,
    type: DataTypes.STRING
  }, 
  direccionProveedor: {
    allowNull: true,
    type: DataTypes.STRING
  },
  telefonoProveedor: {
    allowNull: true,
    type: DataTypes.STRING
  }, 
},{
    sequelize: db,
    modelName: 'Proveedores',
    tableName: 'proveedores',
    timestamps: false
});

module.exports = Proveedores;
    
