var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "test",
  password: "test",
  database:'classicmodels',
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL");
});

module.exports = con