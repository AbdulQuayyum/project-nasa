let ENDPOINT_URL
if (process.env.STATUS === "development") {
    ENDPOINT_URL = process.env.DEV_ENDPOINT_URL
} else {
    ENDPOINT_URL = process.env.PROD_ENDPOINT_URL
}

// Load planets and return as JSON.
async function httpGetPlanets() {
    const response = await fetch(`${ENDPOINT_URL}/Planets`)
    return await response.json()
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
    const response = await fetch(`${ENDPOINT_URL}/Launches`)
    const FetchedLaunches = await response.json()
    return FetchedLaunches.sort((a, b) => {
        return a.flightNumber - b.flightNumber
    })
}

async function httpSubmitLaunch(launch) {
    // TODO: Once API is ready.
    // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitLaunch,
    httpAbortLaunch,
}