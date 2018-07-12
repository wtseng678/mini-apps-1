var express = require("express");
var app = express();
var mysql = require('mysql'); // move to db?
app.use(express.static("node_modules"));

app.use(express.static('public'));

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'data'
}); 


app.post("/", function (req, res) {
  req.on('data', function(data) { 
    data = JSON.parse(data);
    connection.connect(function(err) {
      if (err) {
        throw err;
      }
      connection.query(`INSERT INTO users (name, email, password, add_1, add_2, city, state, zip, card, expiry, cvv, bill_zip) VALUES ("${data.name}", "${data.email}", "${data.password}", "${data.line_1}", "${data.line_2}", "${data.city}", "${data.state}", "${data.zipcode}", "${data.ccn}", "${data.ed}", "${data.cvv}", "${data.bz}");`, function (err, result) {
        if (err) {throw err;}
        console.log("record inserted");
      });      
    });
  });
  // req.on('end', function() {
  // });
});

app.listen(3000);