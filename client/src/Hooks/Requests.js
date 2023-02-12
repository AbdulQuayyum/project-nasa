let ENDPOINT_URL
if (process.env.STATUS === "development") {
    ENDPOINT_URL = process.env.DEV_ENDPOINT_URL
} else {
    ENDPOINT_URL = process.env.PROD_ENDPOINT_URL
}

async function httpGetPlanets() {
    // TODO: Once API is ready.
    // Load planets and return as JSON.
    const response = await fetch(`${ENDPOINT_URL}/Planets`)
    return await response.json()
}

async function httpGetLaunches() {
    // TODO: Once API is ready.
    // Load launches, sort by flight number, and return as JSON.
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