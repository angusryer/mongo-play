const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
	company_name: {
		type: String
	},
	website: {
		type: String
	},
	games: [
		{
			date: Date,
			name: String
		}
	]
});

const Publisher = mongoose.model("Publisher", publisherSchema);

module.exports = Publisher;
