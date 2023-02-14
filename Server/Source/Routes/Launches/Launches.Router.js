const { Launches } = require('../../Models/Launches.Model')

const LaunchesRouter = express.Router()

LaunchesRouter.get('/Launches', GetAllLaunches)

module.exports = LaunchesRouter