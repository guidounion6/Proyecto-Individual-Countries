const { Router } = require('express')
const { getCountriesHandler } = require('../handlers/Countries Handlers/getCountriesHandler')
const { getCountriesByIdHandler } = require('../handlers/Countries Handlers/getCountriesByIdHandler')
const { getCountriesByNameHandler } = require('../handlers/Countries Handlers/getCountriesByNameHandler')
const countriesRouter = Router()





countriesRouter.get("/", getCountriesHandler)
countriesRouter.get("/:idPais", getCountriesByIdHandler)
countriesRouter.get("/name?=", getCountriesByNameHandler)


module.exports = countriesRouter

