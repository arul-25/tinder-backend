const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	imgUrl: {
		type: String,
		required: true
	}
})

module.exports = Card = mongoose.model("cards", cardSchema)
