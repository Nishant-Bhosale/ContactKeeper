const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.use(express.json({ extended: false }));
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to the contact Keeper API.",
	});
});

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
	console.log("Server is running on " + PORT);
});
