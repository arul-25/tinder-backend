const express = require("express")
const mongoose = require("mongoose")
const connect = require("./connection")
const cors = require("cors")

const Card = require("./dbCards")

// App Config
const app = express()
const port = process.env.PORT || 8001

// middleware
app.use(express.json())
app.use(cors())
require("dotenv").config()

// dbConfig
connect()

// API Endpoints
app.get("/", (req, res) => {
	res.send("Hello World")
})

app.post("/tinder/cards", (req, res) => {
	const newCard = req.body
	console.log(newCard)

	Card.create(newCard, (err, data) => {
		if (err) return res.status(500).send(err)
		res.send(data)
	})
})

app.get("/tinder/cards", (req, res) => {
	Card.find({})
		.then(data => res.status(200).send(data))
		.catch(err => res.status(500).send(err))
})

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`)
})
