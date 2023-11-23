const {Activity} = require('../../sync/DB_connection')
 

const postActivities = async (name, dificultad, duracion, temporada) =>{
   
      try {
         if (name && dificultad && duracion && temporada) {
            return await Activity.create({ 
               name, 
               dificultad, 
               duracion,
               temporada })
            }
            return Error ('Falla al cargar los datos')
      } catch (error) {
         console.log(error)
      }
      }
module.exports = {postActivities}