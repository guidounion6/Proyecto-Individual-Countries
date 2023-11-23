const {Country} = require('../../sync/DB_connection')
const  {Op} = require('sequelize')


const getCountriesByName = async (name) =>{
   
   if (name){
   const pais = await Country.findOne({ where: { name:
      {[Op.iLike] :`%${name}%`} } })
    return pais
}
   throw Error (`Has ingresado un name: (${name}) equivocado`)
}

module.exports = {getCountriesByName}