const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const dotenv = require('dotenv')
dotenv.config()

const LaunchesRouter = require('./Routes/Launches/Launches.Router')
const PlanetsRouter = require('./Routes/Planets/Planets.Router')

const app = express()

app.use(cors({
    origin: 'https://localhost:3000'
}))

app.use(morgan('combined'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', Public)))

app.use(LaunchesRouter)
app.use(PlanetsRouter)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', Public, 'Index.html'))
})

module.exports = app 