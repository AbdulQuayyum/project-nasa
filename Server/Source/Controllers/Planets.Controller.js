const { GetAllPlanets } = require('../Models/Planets.Model')

function HttpGetAllPlanets(req, res) {
    return res.status(200).json(GetAllPlanets())
}

module.exports = {
    HttpGetAllPlanets
}