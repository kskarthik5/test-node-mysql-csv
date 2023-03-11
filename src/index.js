const express = require('express');
const app=express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.get('/', async (req, res) => {
	res.send("hello")
});
app.listen(PORT, () => {
	console.log("listening "+PORT+"...");
});