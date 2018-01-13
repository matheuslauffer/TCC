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

module.exports.getMyMatchs = function(application, req, res){
  var connection = application.config.dbConnection;
  var MatchDAO = new application.app.models.MatchDAO(connection);
  var admin = req.body;
  MatchDAO.getMyMatchs(res, admin);
}

module.exports.getDetails = function(application, req, res){
  var connection = application.config.dbConnection;
  var MatchDAO = new application.app.models.MatchDAO(connection);
  var idPartida = req.params._id;
  MatchDAO.getMatchById(res, idPartida);
}

module.exports.getMyInvites = function(application, req, res){
  var connection = application.config.dbConnection;
  var MatchDAO = new application.app.models.MatchDAO(connection);
  var id = req.params._id;
  MatchDAO.getMyInvites(res, id);
}

module.exports.confirmInvite = function(application, req, res){
  var connection = application.config.dbConnection;
  var MatchDAO = new application.app.models.MatchDAO(connection);
  var admin = req.body.admin;
  var match = req.body.match;
  var confirmacao = req.body.confirmacao;
  MatchDAO.confirmInvite(res, admin, match, confirmacao);
}
