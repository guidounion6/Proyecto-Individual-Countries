const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.STRING,
        allowNull: false

    },
    duración: {
      type: DataTypes.STRING,
        allowNull: false

    },
    temporada: {
        type: DataTypes.ENUM('Verano','Otoño', 'Invierno', 'Primavera' ),
        allowNull: false
    }
  });
};