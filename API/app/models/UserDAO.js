function UserDAO(connection){
  this._connection = connection();
}

UserDAO.prototype.getUser = function (user) {
  this._connection.open(function(err, mongoclient){
    collection.find(usuario).toArray(function(err, result) {
      console.log(result);
    })
  })
}
