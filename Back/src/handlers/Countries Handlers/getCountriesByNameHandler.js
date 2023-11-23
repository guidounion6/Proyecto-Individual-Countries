const { getCountriesByName } = require("../../controllers/Countries/getCountriesByName")

const getCountriesByNameHandler = async (req, res) => {

    try {
      const { name } = req.query
      const pais = await getCountriesByName(name)
  
      res.status(200).json(`Tenemos un pais ${name}:`,pais)
    } catch (error) {
     res.status(404).send(error.message)
 
    }
 }
 
 module.exports ={getCountriesByNameHandler}