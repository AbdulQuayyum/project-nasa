const http = require('http');

const app = require('./App')
const { LoadPLanetsData } = require('./Models/Planets.Model')

const server = http.createServer(app)

// const PORT = process.env.PORT || 8080
let PORT
process.env.STATUS === "development"
    ? (PORT = process.env.DEV_ENDPOINT_URL)
    : (PORT = process.env.PROD_ENDPOINT_URL)

async function StartServer() {
    await LoadPLanetsData()

    server.listen(PORT, () => {
        console.log(`Server is in ${process.env.STATUS} mode, listening on port ${PORT}`)
    })
}

StartServer()