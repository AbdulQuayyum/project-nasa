const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config()

const PlanetsRouter = require('./Routes/Planets/Planets.Router')

const app = express()

app.use(cors())
app.use(express.json())
app.use(PlanetsRouter)

module.exports = app