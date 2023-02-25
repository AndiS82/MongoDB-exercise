import "../config/config.js"
import { getDb } from "../utils/db.js"

getDb()
    .then(db => {
        console.log("Das ist DB", db)
        return db
    })
    .then(db => db.collection("turbine").insertOne({ hersteller: "Bell", bezeichnung: "Airwolf" }))
    .then(res => console.log(res))
    .catch(err => console.log(err))