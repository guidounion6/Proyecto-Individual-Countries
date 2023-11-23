const { Router } = require('express')
const { getAllActivitiesHandler } = require('../handlers/Activities Handlers/getAllActivitiesHandler')
const { postActivitiesHandler } = require('../handlers/Activities Handlers/postActivitiesHandler')
const activitiesRouter = Router()


activitiesRouter.get("/", getAllActivitiesHandler)
activitiesRouter.post("/", postActivitiesHandler)


module.exports = activitiesRouter
