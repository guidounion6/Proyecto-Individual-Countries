const {Country} = require('../../sync/DB_connection')

 
const getCountriesByName = async(name) =>{
   
   if (name)
   return await Country.findOne({ where: { name: "name" } })
   throw Error (`Has ingresado un name: (${name}) equivocado`)
}

module.exports = {getCountriesByName}