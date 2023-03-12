const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const con = require('./db/connection')
const csvParser = require('json2csv').Parser;
app.use(express.json());
app.use(bodyParser.json());
app.get('/', async (req, res) => {
	var sql = "SELECT * FROM customers";
	con.query(sql, function (err, result) {
		if (err) throw err;
		const customers = JSON.parse(JSON.stringify(result))
		const fields = ['customerNumber', 'customerName', 'contactLastName', 'contactFirstName', 'phone', 'addressLine1', 'addressLine2', 'city', 'state', 'postalCode', 'country', 'salesRepEmployeeNumber', 'creditLimit']
		const parser = new csvParser({ fields });
		const csv = parser.parse(customers)
		res.setHeader("Content-Type", "text/csv");
		res.setHeader("Content-Disposition", "attachment; filename=users.csv");
		res.status(200).end(csv);
	});

});
app.listen(PORT, () => {
	console.log("listening " + PORT + "...");
});