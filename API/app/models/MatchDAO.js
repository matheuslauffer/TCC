function MatchDAO(connection) {
  this._connection = connection();
}

MatchDAO.prototype.newMatch = function (partida) {
    this._connection.open(function(err, mongoclient){
      mongoclient.collection("partidas", function(err, collection){
        partida.admin = "Matheus";
        collection.insert(partida);
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

module.exports = function() {
  return MatchDAO;
};
