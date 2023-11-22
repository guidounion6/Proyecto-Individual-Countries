const getCountriesHandler = (req, res) => {

    res.status(200).send("aqui estan todos los paises")
}

const getCountriesByIdHandler = (req, res) => {

    const { id } = req.params

    res.status(200).send(`Detalle del pais ${id}`)
}

const getCountriesByNameHandler = (req, res) => {

    const { name } = req.query

    res.status(200).send(`Tenemos un pais ${name}`)
}

module.exports = {
    getCountriesHandler,
    getCountriesByIdHandler,
    getCountriesByNameHandler
}
