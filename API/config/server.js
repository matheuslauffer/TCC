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


consign().include('app/routes').into(app);
// app.get('/', function(req, res) {
//   res.send("Server");
// });

module.exports = app;
