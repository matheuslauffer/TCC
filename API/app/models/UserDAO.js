function UserDAO(connection){
  this._connection = connection();
}

UserDAO.prototype.getUser = function (res, user) {
  this._connection.open(function(err, mongoclient){
    mongoclient.collection("users", function(err, collection){
      collection.find(user).toArray(function(err, result) {
        res.send(result);
      });
      mongoclient.close();
    });
  });
}

module.exports = function() {
  return UserDAO;
};
