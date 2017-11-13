module.exports = function(application){
  application.get('/sports', function(req, res) {
    application.app.controllers.sports.getSportsController(application, req, res);
  });
}
