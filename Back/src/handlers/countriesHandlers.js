const { getAllCountries } = require("../controllers/Countries/getAllCountries")
const { getCountriesById } = require("../controllers/Countries/getCountriesById")
const { getCountriesByName } = require("../controllers/Countries/getCountriesByName")


const getCountriesHandler = async (req, res) => {

    try {
        const countries = await getAllCountries()

        res.status(200).json(countries)
        
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getCountriesByIdHandler = async (req, res) => {

    try {
        const { id } = req.params
        const pais = await getCountriesById(id)
    
        res.status(200).json(pais)

    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getCountriesByNameHandler = async (req, res) => {

   try {
     const { name } = req.query
     const pais = await getCountriesByName(name)
 
     res.status(200).json(`Tenemos un pais ${name}:`,pais)
   } catch (error) {
    res.status(404).send(error.message)

   }
}

module.exports = {
    getCountriesHandler,
    getCountriesByIdHandler,
    getCountriesByNameHandler
}
