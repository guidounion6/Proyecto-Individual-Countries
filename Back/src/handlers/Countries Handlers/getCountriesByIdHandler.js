const { getCountriesById } = require("../../controllers/Countries/getCountriesById")

const getCountriesByIdHandler = async (req, res) => {

    const { id } = req.params

    try {
        const pais = await getCountriesById(id)

        res.status(200).json(pais)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { getCountriesByIdHandler }