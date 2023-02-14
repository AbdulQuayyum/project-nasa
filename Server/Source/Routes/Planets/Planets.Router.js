const express = require('express')

const { GetAllPlanets } = require('../../Controllers/Planets.Controller')

const PlanetsRouter = express.Router()

PlanetsRouter.get('/Planets', GetAllPlanets)

module.exports = PlanetsRouter