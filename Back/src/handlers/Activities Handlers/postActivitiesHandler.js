const { postActivities } = require("../../controllers/Activities/postActivities")


const postActivitiesHandler = async (req, res) => {

    const { name, dificultad, duracion, temporada, idPais } = req.body
    
    try {
        const activity = await postActivities(name, dificultad, duracion, temporada, idPais)
        
        res.status(201).json(activity)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = { postActivitiesHandler }