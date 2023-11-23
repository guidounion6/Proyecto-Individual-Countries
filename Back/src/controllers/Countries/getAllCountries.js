 const { Country } = require('../../sync/DB_connection')
 
 const getAllCountries = async ()=> {

    return await Country.findAll()

}

module.exports = {getAllCountries}