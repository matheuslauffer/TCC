function SportsDAO(connection) {
  this._connection = connection();
}

SportsDAO.prototype.getSports = function (res) {
  this._connection.open(function(err,mongoclient){
    mongoclient.collection("esportes", function(err, collection){
      collection.find().toArray(function(err, result){
        res.json(result);
      });
    });
    mongoclient.close();
  });
}

module.exports = function() {
  return SportsDAO;
};
