const db = require('../config/config');
const { Sequelize, DataTypes } = require('sequelize'); 


class Productos extends Sequelize.Model {};

Productos.init({
  idProducto: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  estadoProducto: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  nombreProducto: {
    allowNull: true,
    type: DataTypes.STRING
  }, 
  precioCompra: {
    allowNull: true,
    type: DataTypes.FLOAT
  },
  precioVenta: {
    allowNull: true,
    type: DataTypes.FLOAT
  },
  saldoExistencias: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  stockMaximo: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  stockMinimo: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  categoriaProducto_idCategoriaProducto:{
    type: DataTypes.INTEGER,
    references: {
        //model:categoriaproducto,
        key: "idCategoriaProducto",
    },
  }
},{
    sequelize: db,
    modelName: 'Productos',
    tableName: 'productos',
    timestamps: false
});

module.exports = Productos;
    
