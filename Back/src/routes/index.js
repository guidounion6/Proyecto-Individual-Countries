const { getAllCountries } = require('../controllers/Countries/getAllCountries')
const { getCountriesByName } = require('../controllers/Countries/getCountriesByName')
const { getCountriesById } = require('../controllers/Countries/getCountriesById')
const { postActivities } = require('../controllers/Activities/postActivities')
const { getActivities } = require('../controllers/Activities/getActivities')

const router = require('express').Router();

router.get('/countries', getAllCountries)
router.get('/countries/:idPais', getCountriesById)
router.get('/countries/name', getCountriesByName)
router.post('/activities', postActivities)
router.get('/activities', getActivities)


module.exports = router