var express = require('express');
var mongodb = require('mongodb');
var objectId = require('mongodb').objectId;

var app = express();

app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});

var port = 8080;
app.listen(port);

var db = new mongodb.Db(
	'bora_jogar',
	new mongodb.Server('localhost', 27017, {}),
	{}
);

console.log('Servidor HTTP esta escutando na porta ' + port);
