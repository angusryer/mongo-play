const mongoose = require("mongoose");

module.exports = mongoose
	.connect("mongodb://localhost:27017/local", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("Database connected"))
	.catch((err) => {
		console.log("Something went wrong", err);
		process.exit(1);
	});
