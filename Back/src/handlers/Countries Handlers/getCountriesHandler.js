const { getAllCountries } = require("../../controllers/Countries/getAllCountries")

const getCountriesHandler = async (req, res) => {

    try {
        const countries = await getAllCountries()

        res.status(200).json(countries)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    getCountriesHandler,
    
}
