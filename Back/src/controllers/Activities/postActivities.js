const {Activity} = require('../../sync/DB_connection')
 
const postActivities = async(name, dificultad, duracion, temporada) =>{

   if (name && dificultad && duracion && temporada)  
   {return await Activity.create(name, dificultad, duracion, temporada)}
   throw Error ('Faltan datos por completar')
   
}

module.exports = {postActivities}