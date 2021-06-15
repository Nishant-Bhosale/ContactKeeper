const express = require("express");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contacts");
const User = require("../models/User");
const router = express.Router();

router.get("/", auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(contacts);
	} catch (error) {
		console.error("Server error");
		res.status(500).send();
	}
});

router.post("/", (req, res) => {
	res.send("add a contact");
});

router.put("/:id", (req, res) => {
	const id = req.query.id;

	res.send("Update contact");
});

router.delete("/:id", (req, res) => {
	res.send("Delete contact");
});

module.exports = router;
