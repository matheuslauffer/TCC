var express = require("express");

var consign = require("consign");

var app =  express();


app.set("view engine", "ejs");
app.use(express.static('./app/public'));

consign()
  .include("app/public");

app.get("/", function(req, res){
  res.render("../app/public/views/index.ejs");
})

module.exports = app;
