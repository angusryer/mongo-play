const express = require("express");
require('./db');
const Publisher = require("./publisher.js");
const app = express();

const port = 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/publish", async (req, res) => {
	const { company_name, website, games } = req.body;

	const insert = new Publisher({ company_name, website, games });

	try {
		const data = await insert.save();
		res.send(data);
	} catch (err) {
		console.log(err);
	}
});

app.listen(port, () => console.log(`App is up and running at ${port}`));
