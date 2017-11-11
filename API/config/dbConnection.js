var mongodb = require('mongodb');
var objectId = require('mongodb').objectId;

var connMongoDB = function(){
  var db = new mongodb.Db(
    'bora_jogar',
    new mongodb.Server('localhost', 27017, {}),
    {}
  );
  return db;
}

module.exports = function(){
  return connMongoDB;
  console.log("Servidor de banco de dados rodando");
}
