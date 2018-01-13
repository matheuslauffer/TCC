module.exports = function(application){
  application.post('/createMatch', function(req, res) {
    application.app.controllers.match.newMatchController(application, req, res);
  });

  application.get('/get-all-matchs', function(req, res) {
    application.app.controllers.match.getAllMatchsController(application, req, res);
  });

  application.get('/get-match-by-admin', function(req, res){
    application.app.controllers.match.getMatchByAdminController(application, req, res);
  });

  application.post('/getMyMatchs', function(req, res){
    application.app.controllers.match.getMyMatchs(application, req, res);
  });
  application.get('/getDetails/:_id', function(req, res){
    application.app.controllers.match.getDetails(application, req, res);
  });
  application.get('/getMyInvites/:_id', function(req, res){
    application.app.controllers.match.getMyInvites(application, req, res);
  });
  application.post('/confirmInvite', function(req, res){
    application.app.controllers.match.confirmInvite(application, req, res);
  })
}
