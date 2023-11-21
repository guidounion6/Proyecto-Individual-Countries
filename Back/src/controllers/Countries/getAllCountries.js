 const {Country} = require('../../DB_connection')
 
 const getAllCountries = (req,res) =>{

    res.status(200).send('Aqui estan todos los paises')


}

module.exports = {getAllCountries}