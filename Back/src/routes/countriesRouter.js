const { Router } = require('express')
const countriesRouter = Router()
const {getCountriesHandler, getCountriesByIdHandler, getCountriesByNameHandler } = require('../handlers/countriesHandlers')





countriesRouter.get("/", getCountriesHandler)
countriesRouter.get("/:idPais", getCountriesByIdHandler)
countriesRouter.get("/name?=", getCountriesByNameHandler)


module.exports = countriesRouter

