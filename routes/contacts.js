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

router.post(
	"/",
	[auth, [check("name", "Name is Required")]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, phone, type } = req.body;
		try {
			const newContact = new Contact({
				name,
				email,
				phone,
				type,
				user: req.user.id,
			});

			const contact = await newContact.save();

			res.json(contact);
		} catch (error) {
			res.status(500).send();
			console.error("Server Error");
		}
		res.send("add a contact");
	},
);

router.put("/:id", (req, res) => {
	const id = req.query.id;

	res.send("Update contact");
});

router.delete("/:id", (req, res) => {
	res.send("Delete contact");
});

module.exports = router;
