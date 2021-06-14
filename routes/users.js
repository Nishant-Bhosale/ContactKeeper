const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

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
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ message: "User already exists" });
			}

			user = new User({ name, email, password });
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get("secretKey"),
				{
					expiresIn: 360000,
				},
				(error, token) => {
					if (error) throw error;
					res.json({ token });
				},
			);
		} catch (error) {
			console.error(error);
		}
	},
);

module.exports = router;
