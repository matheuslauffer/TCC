module.exports.getSportsController = function(application, req, res){
  var connection = application.config.dbConnection;
  var SportsDAO = new application.app.models.SportsDAO(connection);
  SportsDAO.getSports(res);
}
