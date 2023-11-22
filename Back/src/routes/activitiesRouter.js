const { Router } = require('express')
const activitiesRouter = Router()
const { getAllActivitiesHandler, postActivitiesHandler } = require('../handlers/activitiesHandlers')



activitiesRouter.get("/", getAllActivitiesHandler)
activitiesRouter.post("/", postActivitiesHandler)


module.exports = activitiesRouter
