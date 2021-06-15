const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
	},
	type: {
		type: String,
		default: "Personal",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("contacts", contactSchema);
