const Planets = require('../Models/Planets.Model')

function GetALLPlanets(req, res) {
    return res.status(200).json(Planets)
}

module.exports = {
    GetALLPlanets
}