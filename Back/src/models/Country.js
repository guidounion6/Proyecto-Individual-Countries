const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Country', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    id: {
        type: DataTypes.STRING(3),
        primaryKey:true,
        allowNull: false
    },
    capital: {
        type: DataTypes.STRING,
        allowNull: true,
        
    },
    continents: {
        type: DataTypes.STRING,
        allowNull: false
    
    },
    population: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    area: {
        type: DataTypes.DECIMAL(10, 2),
       allowNull: false
    },
    flags: {
        type: DataTypes.STRING,
        allowNull: false,
        isUrl: true,
        unique: true
    },
    coatOfArms:{
        type: DataTypes.STRING,
        allowNull: true,
        isUrl: true,
        unique: true
    }
  }, {timestamps: false});
};