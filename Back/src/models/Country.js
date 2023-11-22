const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Country', {
    id: {
        type: DataTypes.STRING(3),
        primaryKey:true,
        allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    flags: {
        type: DataTypes.STRING,
        allowNull: false,
        isUrl: true,
        unique: true

    },
    continents: {
        type: DataTypes.STRING,
        allowNull: false

    },
    capital: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    area: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false

    },
    population: {
        type: DataTypes.INTEGER,
        allowNull: false

    }
  }, {timestamps: false});
};