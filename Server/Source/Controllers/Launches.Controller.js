const LaunchesModel = require('../Models/Launches.Model')

function GetAllLaunches(req, res) {
    return res.status(200).json(Array.from(launches.values()))   
}

module.exports = {
    GetAllLaunches,
}