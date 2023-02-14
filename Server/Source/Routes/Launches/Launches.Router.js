const express = require('express')
const { GetAllLaunches } = require('../../Controllers/Launches.Controller')

const LaunchesRouter = express.Router()

LaunchesRouter.get('/Launches', GetAllLaunches)

module.exports = LaunchesRouter