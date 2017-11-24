module.exports = function(application){
  //criar controller
  application.post('/create-user', function(req, res) {
    application.app.controllers.user.newUserController(application, req, res);
  });
  application.get('/get-user', function(req, res) {
    application.app.controllers.user.getUserController(application, req, res);
  });
}
