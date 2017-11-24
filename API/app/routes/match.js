module.exports = function(application){
  application.post('/create-match', function(req, res) {
    application.app.controllers.match.newMatchController(application, req, res);
  });

  application.get('/get-all-matchs', function(req, res) {
    application.app.controllers.match.getAllMatchsController(application, req, res);
  });

  application.get('/get-match-by-admin', function(req, res){
    application.app.controllers.match.getMatchByAdminController(application, req, res);
  });
}