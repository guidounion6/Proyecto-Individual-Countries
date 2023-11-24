const {Country} = require('../../sync/DB_connection')
const { Activity } = require('../../sync/DB_connection')


const getCountriesById = async (idPais) =>{

   const pais = await Country.findOne({ 
      where: { id: idPais },
      include:{ 
         model: Activity, 
         attributes: ["id", "name" , "dificultad", "duracion", "temporada"],
         through: {attributes: []}  
   }
   })
      
   if(!pais) throw Error('No existe el pais con ese id')
   return pais

}

module.exports = {getCountriesById}