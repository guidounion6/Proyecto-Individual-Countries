const {Country} = require('../../sync/DB_connection')
const { Activity } = require('../../sync/DB_connection')
const { country_activity } =require('../../sync/DB_connection')

 
const getCountriesById = async (idPais) =>{

   if (idPais){
      const pais = await Country.findOne({ where: { id: idPais } })
      const actividad = await country_activity.findOne({where: { CountryId: idPais}})
      await pais.addActivity(actividad)
      const paisActividad = await Country.findOne({
         where: { id: idPais },
         include: [
            {
              model: Activity
            },
          ],
      })
      return paisActividad
   }

}

module.exports = {getCountriesById}