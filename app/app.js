var express = require("express");
var app = express();

app.get("/stores", function(req, res) {
  var stores = [];
  //TODO load data from file stores.json
  res.send(stores);
});

app.listen(3000);