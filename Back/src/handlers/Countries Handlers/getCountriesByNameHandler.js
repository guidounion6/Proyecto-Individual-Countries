const { getCountriesByName } = require("../../controllers/Countries/getCountriesByName")

const getCountriesByNameHandler = async (req, res) => {

    try {
      const { name } = req.query

      const pais = await getCountriesByName(name.toLowerCase())
      res.status(200).json(pais)
    } catch (error) {
     res.status(404).send(error.message)
    }
 }
 
 module.exports = {getCountriesByNameHandler}