const axios = require('axios')
require('dotenv').config();
const { Country } = require('./DB_connection')
const {URL_API} = process.env;


//Aca se guardan los paises en la db "countries"

const syncAPItoDB = async () =>{
    try {
        const response = await axios.get(URL_API)
        const countries = response.data

        for (const country of countries ) {
            await Country.create({
                id: country.cca3,
                name: country.name.common, 
                flags: country.flags.png,
                continent: country.continents[0], 
                capital: country.capital && country.capital.length > 0 ? country.capital[0] : null,
                area: country.area, 
                population: country.population
            })
        }

         console.log('Aca estan los paises')
         
    } catch (error) {
        
        console.log('No se pudio')
    }
}


module.exports = {syncAPItoDB}