const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = express.Router();

router.post(
	"/",
	[
		check("name", "Please enter name").not().isEmpty(),
		check("email", "Please enter a valid Email.").isEmail(),
		check(
			"password",
			"Please enter a password with six or more characters",
		).isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		res.send("Passed");
	},
);

module.exports = router;
