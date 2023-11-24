const { getCountriesByName } = require("../../controllers/Countries/getCountriesByName")

const getCountriesByNameHandler = async (req, res) => {
  
       const { name } = req.query
    try {
        const pais = await getCountriesByName(name.toLowerCase())
        res.status(200).json(pais)
      
    } catch (error) {
     res.status(500).send(error.message)
    }
 }
 
 module.exports = {getCountriesByNameHandler}