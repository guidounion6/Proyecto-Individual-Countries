const {Country} = require('../../DB_connection')
 
const getCountriesByName = (req,res) =>{

   res.status(200).send('Aqui estan todos los paises por nombre')


}

module.exports = {getCountriesByName}