module.exports.getMatchs = function(application, req, res){
  var connection = application.config.dbConnection;
  var MatchDAO = new application.app.models.MatchDAO(connection);

  MatchDAO.getAllMatchs();
}
