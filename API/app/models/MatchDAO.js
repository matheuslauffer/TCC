function MatchDAO(connection) {
  this._connection = connection();
}

MatchDAO.prototype.getAllMatchs = function (connection) {
  this._connection.open(function(err,mongoclient){
    mongoclient.collection("esportes", function(err, collection){
      collection.find().toArray(function(err, result){
        console.log(resul);
      })
    })
  });
}
