const {Country} = require('../../sync/DB_connection')

 
const getCountriesById = async (idPais) =>{

   if (idPais)
   {console.log(idPais)
   return await Country.findOne({ where: { id: idPais } })}
   throw Error (`Has ingresado un id: ${id} equivocado`)
   
}

module.exports = {getCountriesById}