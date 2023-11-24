const { Activity } = require('../../sync/DB_connection')
const { Country } = require('../../sync/DB_connection')
 

const postActivities = async (name, dificultad, duracion, temporada, idPais) =>{
   
       if (name && dificultad && duracion && temporada && idPais) {
            const post = await Activity.create({ 
               name, 
               dificultad, 
               duracion,
               temporada,})
              const pais = await Country.findOne({ where: { id: idPais } })
              await post.addCountry(pais) 
               const postPais = await Activity.findOne({
                   where: { id: post.id },
                   include: [
                        {
                          model: Country,
                          attributes: ['name']
                        },
                      ],
               });
      
              return postPais;
            }
            throw Error ('Error al cargar datos')
      }
module.exports = {postActivities}