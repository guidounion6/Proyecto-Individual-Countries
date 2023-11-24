const {Activity} = require('../../sync/DB_connection')
const {Country} = require('../../sync/DB_connection')

 
const getActivities = async() =>{

  const actividad = await Activity.findAll({
      include:{ 
      model: Country, 
      attributes: ["name"],
      through: {attributes: []} 
}
})
   if(!actividad) throw Error ('No hay actividades para mostrar')
   return actividad 
  
}

module.exports = {getActivities}