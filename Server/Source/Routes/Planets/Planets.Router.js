const express = require('express')

const { GetALLPlanets } = require('../../Controllers/Planets.Controller')

const PlanetsRouter = express.Router()

PlanetsRouter.get('/Planets', GetALLPlanets)

module.exports = PlanetsRouter