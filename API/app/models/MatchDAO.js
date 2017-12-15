var objectID = require('mongodb').objectID;

function MatchDAO(connection) {
  this._connection = connection();
}

MatchDAO.prototype.newMatch = function (req, res, partida) {
    this._connection.open(function(err, mongoclient){
      mongoclient.collection("partidas", function(err, collection){
        partida.admin = "Matheus";
        collection.insert(partida, (erro, partidaInserida) => res.json(partidaInserida));
        // res.json(partida);
        mongoclient.close();
      });
    });
}

MatchDAO.prototype.getAllMatchs = function (res) {
  this._connection.open(function(err,mongoclient){
    mongoclient.collection("partidas", function(err, collection){
      collection.find().toArray(function(err, result){
        res.send(result);
      });
    });
    mongoclient.close();
  });
}

MatchDAO.prototype.getMatchByAdmin = function (res, admin) {
  this._connection.open(function(err,mongoclient){
    mongoclient.collection("partidas", function(err, collection){
      admin.name = {admin: "Matheus"};
      collection.find(admin.name).toArray(function(err, result){
        res.send(result);
      });
    });
    mongoclient.close();
  });
}

MatchDAO.prototype.sendInvites = function(partida){
  console.log(partida);
}

module.exports = function() {
  return MatchDAO;
};
