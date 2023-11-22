 const { Country } = require('../../DB_connection')
 
 const getAllCountries = async ()=> {

    return await Country.findAll()

}

module.exports = {getAllCountries}