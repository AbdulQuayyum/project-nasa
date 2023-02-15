const express = require('express')
const { HttpGetAllLaunches } = require('../../Controllers/Launches.Controller')

const LaunchesRouter = express.Router()

LaunchesRouter.get('/Launches', HttpGetAllLaunches)

module.exports = LaunchesRouter