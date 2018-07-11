var express = require("express");
var app = express();

app.use(express.static("client"));
app.use(express.static("node_modules"));


// app.get("/", function (req, res) {
//   console.log("got");
//   res.send("GET request to the homepage");
// });

var trim = function(obj) {
  if (obj[obj.length - 1] === ';') {
    obj = obj.slice(0, -1);
  }
  console.log(obj);
  return JSON.parse(obj);
}

var rows = [];
var parseObj = function(obj) {
  var row = [];
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      rows.push(row.join(","));
      for (var i = 0; i < obj[key].length; i++) {
        parseObj(obj[key][i]);
      }
    } else {
      row.push(obj[key]);
    }
  }
  return rows;
};

// POST method route
app.post("/", function (req, res) {
  var str = "";
  req.on('data', function(data) {
    var obj = trim(data.toString())
    var keys = Object.keys(obj);
    for (var key = 0; key < keys.length; key++) {
      if (Array.isArray(obj[keys[key]])) {
        keys.splice(key, key + 1);
      }
    }
    var s = parseObj(trim(data.toString()));
    str = keys.join(",");
    for (var i = 0; i < s.length; i++) {
      str += "\n" + s[i];
    }
  });
  req.on('end', function(data) {
    res.send(str);
    rows = [];
  });
});


app.listen(3000);