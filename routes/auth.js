const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

const { check, validationResult } = require("express-validator");

router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: "Server Error" });
	}
});

router.post(
	"/",
	[
		check("email", "Please provide valid Email").isEmail(),
		check("password", "Please provide valid Password").exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });
			if (!user) {
				return res
					.status(400)
					.json({ msg: "Please provide valid credentials" });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(500).json({ msg: "Please provide valid Password" });
			}

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
			res.status(400).send();
		}
	},
);

module.exports = router;
