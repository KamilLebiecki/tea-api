const express = require("express");
const app = express();
const PORT = 8000;
const tea = {
	oolong: {
		type: "black tea",
		origin: "Yo mammas House",
		waterTemp: 200,
		steepTimeSeconds: 180,
		caffeineted: true,
		flavor: "delicious",
	},
	unknown: {
		type: "unknown",
		origin: "unknown",
		waterTemp: 0,
		steepTimeSeconds: 0,
		caffeineted: false,
		flavor: "unknown",
	},
	matcha: {
		type: "green",
		origin: "Yo mammas House",
		waterTemp: 200,
		steepTimeSeconds: 180,
		caffeineted: false,
		flavor: "delicious",
	},
};

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
	const teaName = request.params.name.toLowerCase();
	if (tea[teaName]) {
		response.json(tea[teaName]);
	} else {
		response.json(tea["unknown"]);
	}
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}! Betta Go Catch It!`);
});
