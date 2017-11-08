var express = require("express");

var app =  express();

app.use(express.static(__dirname + '/app/public'));

app.get("*", function(req, res){
  res.sendfile("./app/public/views/index.html");
});

app.listen(80);
console.log("Servidor rodando");
