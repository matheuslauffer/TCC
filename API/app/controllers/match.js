module.exports.newMatchController = function(application, req, res){
  var connection = application.config.dbConnection;
  var MatchDAO = new application.app.models.MatchDAO(connection);
  var partida = req.body;
  MatchDAO.newMatch(req, res, partida);
}

module.exports.getAllMatchsController = function(application, req, res){
  var connection = application.config.dbConnection;
  var MatchDAO = new application.app.models.MatchDAO(connection);
  MatchDAO.getAllMatchs(res);
}

module.exports.getMatchByAdminController = function(application, req, res){
  var connection = application.config.dbConnection;
  var MatchDAO = new application.app.models.MatchDAO(connection);
  var admin = req.body;
  MatchDAO.getMatchByAdmin(res, admin);
}
