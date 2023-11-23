const { getActivities } = require("../../controllers/Activities/getActivities")


const getAllActivitiesHandler = (req, res) => {

    res.status(200).send("Estas son todas las actividades")
}


module.exports = {
    getAllActivitiesHandler,

}