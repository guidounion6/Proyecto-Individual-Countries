const {Country} = require('../../sync/DB_connection')

 
const getCountriesById = async(id) =>{

   if (id)
   return await Country.findOne({ where: { id: "id" } })
   throw Error (`Has ingresado un id: ${id} equivocado`)
   
}

module.exports = {getCountriesById}