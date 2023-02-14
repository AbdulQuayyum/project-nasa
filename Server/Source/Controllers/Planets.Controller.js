const { Planets } = require('../Models/Planets.Model')

function GetAllPlanets(req, res) {
    return res.status(200).json(Planets)
}

module.exports = {
    GetAllPlanets
}