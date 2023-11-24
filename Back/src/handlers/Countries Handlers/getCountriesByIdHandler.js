const { getCountriesById } = require("../../controllers/Countries/getCountriesById")

const getCountriesByIdHandler = async (req, res) => {

    const { idPais } = req.params

    try {
        const pais = await getCountriesById(idPais.toUpperCase())
        if(!pais) throw Error (`No existe pais con el id ${idPais}`)

        res.status(200).json(pais)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { getCountriesByIdHandler }