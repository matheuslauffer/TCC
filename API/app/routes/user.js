module.exports = function(application){
  application.post('/create-user', function(req, res) {
    application.app.controllers.user.createUserController(application, req, res);
  });

  application.get('/get-user', function(req, res) {
    application.app.controllers.user.getUserController(application, req, res);
  });

  application.get('/get-all-users', function(req, res) {
    application.app.controllers.user.getAllUsersController(application, req, res);
  });
  application.get('/validaUser/:user', function(req, res) {
    application.app.controllers.user.validaUser(application, req, res);
  });
}
