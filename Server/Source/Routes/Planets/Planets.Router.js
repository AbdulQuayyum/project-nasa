const express = require('express')

const PlanetsRouter = require('./r')

const PlanetsRouter = express.Router()

PlanetsRouter.get('/Planets', GetALLPlanets)

module.exports = PlanetsRouter