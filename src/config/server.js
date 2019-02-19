const port = 3003;

const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const app = express();
const allowCors = require('./cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

app.post("/refresh", (req, res, next) => {
	axios({
		method: 'POST',
		headers:{
			"Authorization": "Basic "+req.body.auth,
			'Content-Type':'application/x-www-form-urlencoded'
		},
		params: {grant_type: 'client_credentials'},
		url: "https://accounts.spotify.com/api/token"
	})
	.then(resp => {
		res.send(resp.data);
	})
	.catch(error => {
		res.send(error.response.data);
	})

});

app.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
});

module.exports = app;