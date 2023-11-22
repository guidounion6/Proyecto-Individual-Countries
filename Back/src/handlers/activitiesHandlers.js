const getAllActivitiesHandler = (req, res) => {

    res.status(200).send("Estas son todas las actividades")
}

const postActivitiesHandler = (req, res) => {
 
const { name, dificultad, duracion, temporada } = req.body


    res.status(200).send("Actividad creada con exito")
}

module.exports = {
    getAllActivitiesHandler,
    postActivitiesHandler
}