const {Country} = require('../../DB_connection')
axios = require('axios')
 
const getCountriesByName = async(req,res) =>{
   
   
   try {
        
      const { name } = req.query
      const { data } = await axios.get('http://localhost:5000/countries')

      if (!name || !data)
            return res.status(401).send('Faltan datos')

            const country = {
               id: data[0].cca3,
               name,
               capital: data[0].capital,
               flags: data[0].flags.png,
               continents: data[0].continents,
               population: data[0].population, 
               area: data[0].area

            }

            console.log(data[0].cca3)

            return res.status(200).json(country)
             
      } catch (error) {
      res.status(500).send(error.message)
  }

}

module.exports = {getCountriesByName}