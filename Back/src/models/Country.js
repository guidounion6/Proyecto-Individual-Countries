const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
        type: DataTypes.STRING,
        primaryKey:true

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
        type: DataTypes.STRING

    },
    continente: {
        type: DataTypes.STRING

    },
    capital: {
        type: DataTypes.STRING

    },
    subReg: {
        type: DataTypes.STRING

    },
    area: {
        type: DataTypes.STRING

    },
    poblacion: {
        type: DataTypes.STRING

    }
  });
};