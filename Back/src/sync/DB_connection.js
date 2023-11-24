require('dotenv').config(); 
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const CountryModel = require ('../models/Country')
const ActivityModel = require ('../models/Activity')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   
   { logging: false, native: false }
);

CountryModel(sequelize)
ActivityModel(sequelize)

const {Country, Activity} = sequelize.models

Country.belongsToMany(Activity, {through: 'country_activity', timestamps: false})
Activity.belongsToMany(Country, {through: 'country_activity', timestamps: false})

module.exports = {
   ...sequelize.models,
 conn: sequelize,
};



