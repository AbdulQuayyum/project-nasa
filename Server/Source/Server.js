const http = require('http');

const app = require('./App')

const server = http.createServer(app)

let PORT
// if (process.env.STATUS === "development") {
//     PORT = process.env.DEV_ENDPOINT_URL
// } else {
//     PORT = process.env.PROD_ENDPOINT_URL
// }
process.env.STATUS === "development"
? (PORT = process.env.DEV_ENDPOINT_URL)
: (PORT = process.env.PROD_ENDPOINT_URL)

// const PORT = process.env.PORT || 8080


server.listen(PORT, () => {
    console.log(`Server is in ${process.env.STATUS} mode, listening on port ${PORT}`)
})