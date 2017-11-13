var express = require('express');
var consign = require('consign');

var app = express();

app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});


consign()
  .include('app/routes')
    .then('app/controllers')
    .then('config/dbConnection.js')
    .then('app/models')
  .into(app);

module.exports = app;
