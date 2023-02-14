const Launches = new Map()

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

module.exports = {
    Launches
}