const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
	res.send("Register a user");
});

module.exports = router;
