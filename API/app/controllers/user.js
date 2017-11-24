module.exports.getUserController = function(application, req, res){
  var connection = application.config.dbConnection;
  var UserDAO = new application.app.models.UserDAO(connection);
  var user = {nome : "Matheus"};
  UserDAO.getUser(res, user);
}

//criar controller
module.exports.createUserController = function(application, req, res){
  var connection = application.config.dbConnection;
  var UserDAO = new application.app.models.UserDAO(connection);

  UserDAO.createUser(res, user);
}