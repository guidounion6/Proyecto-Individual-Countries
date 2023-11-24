const {Country} = require('../../sync/DB_connection')
const  {Op} = require('sequelize')


const getCountriesByName = async (name) =>{
   
   if (name){
   const pais = await Country.findAll({ where: { name:
      {[Op.iLike] :`%${name}%`} } })
    return pais
}
   throw Error ("Has ingresado un nombre equivocado")
}

module.exports = {getCountriesByName}