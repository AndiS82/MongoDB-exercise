import express from "express";
import cors from "cors"
import "./config/config.js" // ->liest nur Datei ein
import { getDb } from "./utils/db.js";

const PORT = 9898;

const app = express();

app.use(cors())
app.use(express.json())

app.get("/api/helicopter", (req, res) => {
    getDb()
        .then(db => db.collection("helicopter").find())
        .then(pointer => pointer.toArray())
        .then(array => res.status(200).json(array))
})
app.post("/api/helicopter", (req, res) => {
    const heli = req.body
    getDb()
        .then(db => db.collection("helicopter").insertOne(heli))
        .then(ok => res.status(200).json(ok))

})
app.put("/api/helicopter", (req, res) => {

})
app.delete("/api/helicopter", (req, res) => {

})

app.listen(PORT, () => console.log(PORT))