const Launches = new Map()

let LatestFlightNumber = 100

const Launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('June 22, 2054'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcomming: true,
    success: true
}

Launches.set(Launch.flightNumber, Launch)

function GetAllLaunches() {
    return Array.from(Launches.values())
}

function AddNewLaunch(Launch) {
    LatestFlightNumber++
    Launches.set(
        Launch.flightNumber,
        Object.assign(Launch, {
            success: true,
            upcoming: true,
            customers: ['Abdul-Quayyum', 'NASA'],
            flightNumber: LatestFlightNumber,
        })
    )
}

module.exports = {
    GetAllLaunches
}