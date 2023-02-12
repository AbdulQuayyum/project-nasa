const { parse } = require('csv-parse')
const fs = require("fs")
const path = require('path')

const HabitablePlanetLists = []

function HabitablePlanet(Planet) {
    return Planet["koi_disposition"] === "CONFIRMED"
        && Planet["koi_insol"] > 0.36 && Planet["koi_insol"] < 1.11
        && Planet["koi_prad"] < 1.6
}

/*
const promise = new Promise((resolve, reject) => {
    resolve(42)
})
promise.then((result) => {

})
const result = await promise
console.log(result)
*/

function LoadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'Data', 'Data/KeplerData.csv'))
        // fs.createReadStream('Data/KeplerData.csv')
            .pipe(parse({
                comment: "#",
                columns: true,
            }))
            .on("data", (data) => {
                if (HabitablePlanet(data)) {
                    HabitablePlanetLists.push(data)
                }
            })
            .on("error", (err) => {
                console.log(err)
                reject(err)
            })
            .on("end", () => {
                console.log(HabitablePlanetLists.map((Planet) => {
                    return Planet["kepler_name"]
                }))
                console.log(`${HabitablePlanetLists.length} possible habitable planets were found according to the Kepler data provided`)
                resolve()
            })
    })
} 

module.exports = {
    LoadPlanetsData,
    Planets: HabitablePlanetLists,
}