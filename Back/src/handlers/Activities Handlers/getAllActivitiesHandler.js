const { getActivities } = require("../../controllers/Activities/getActivities")


const getAllActivitiesHandler = async (req, res) => {

    try {

        const activities = await getActivities()
        if (activities.length === 0) throw Error('No hay actividades para mostrar')
        res.status(200).json(activities)

    } catch (error) {

        res.status(404).json({error: error.message})  
    }
}


module.exports = {
    getAllActivitiesHandler,

}