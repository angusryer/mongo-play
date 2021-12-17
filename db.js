const mongoose = require("mongoose");

const uri = "" // Add your own mongodb Atlas or local community server uri here

module.exports = mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("Database connected"))
	.catch((err) => {
		console.log("Something went wrong", err);
		process.exit(1);
	});
