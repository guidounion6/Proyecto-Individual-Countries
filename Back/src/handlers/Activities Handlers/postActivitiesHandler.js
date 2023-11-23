const { postActivities } = require("../../controllers/Activities/postActivities")


const postActivitiesHandler = async (req, res) => {

    const { name, dificultad, duracion, temporada } = req.body

    try {
        const activity = await postActivities({ name, dificultad, duracion, temporada })
        res.status(200).json(activity)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = { postActivitiesHandler }