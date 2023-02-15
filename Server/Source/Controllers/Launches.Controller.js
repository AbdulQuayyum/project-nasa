const LaunchesModel = require('../Models/Launches.Model')
const { GetAllLaunches } = require('../Models/Launches.Model')

function HttpGetAllLaunches(req, res) {
    return res.status(200).json(GetAllLaunches())   
}

module.exports = {
    HttpGetAllLaunches,
}