const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Activity', {
    
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min:1, 
          max:5
        }
    },
    duracion: {
      type: DataTypes.INTEGER,
        allowNull: false
    },
    temporada: {
        type: DataTypes.ENUM("Verano","Otoño", "Invierno", "Primavera"),
        allowNull: false
    }
    
  },{timestamps: false});
};