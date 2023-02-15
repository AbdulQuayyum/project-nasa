const express = require('express')

const { HttpGetAllPlanets } = require('../../Controllers/Planets.Controller')

const PlanetsRouter = express.Router()

PlanetsRouter.get('/Planets', HttpGetAllPlanets)

module.exports = PlanetsRouter