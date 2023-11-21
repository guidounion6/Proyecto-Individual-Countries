const {Country} = require('../../DB_connection')
 
const getCountriesById = (req,res) =>{

   res.status(200).send('Aqui estan todos los paises por id')


}

module.exports = {getCountriesById}