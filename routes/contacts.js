const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Gets all contacts");
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
