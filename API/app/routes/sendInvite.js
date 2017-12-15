module.exports = function(application){
  application.get('/sendInvite/:id', function(req, res) {
    application.app.controllers.sendInvite.sendInvite(application, req, res);
  });
}
