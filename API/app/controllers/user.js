module.exports.createUserController = function(application, req, res){
  var connection = application.config.dbConnection;
  var UserDAO = new application.app.models.UserDAO(connection);
  var user = req.body;
  UserDAO.createUser(res, user);
}

module.exports.getUserController = function(application, req, res){
  var connection = application.config.dbConnection;
  var UserDAO = new application.app.models.UserDAO(connection);
  var user = {nome : "Matheus"};
  UserDAO.getUser(res, user);
}

module.exports.getAllUsersController = function(application, req, res){
  var connection = application.config.dbConnection;
  var UserDAO = new application.app.models.UserDAO(connection);
  UserDAO.getAllUsers(res);
}

module.exports.validaUser = function(application, req, res){
  var connection = application.config.dbConnection;
  var UserDAO = new application.app.models.UserDAO(connection);
  var user = req.body;
  UserDAO.validaUser(res, user);
}
