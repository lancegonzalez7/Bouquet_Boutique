var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express();
app.use(bodyParser.json());

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
