const { getActivities } = require("../../controllers/Activities/getActivities")


const getAllActivitiesHandler = async (req, res) => {

    try {

        const activities = await getActivities()
        
        res.status(200).json(activities)

    } catch (error) {

        res.status(404).json({error: error.message})  
    }
}


module.exports = {
    getAllActivitiesHandler,

}