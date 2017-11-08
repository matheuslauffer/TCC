angular.module("BoraJogar")
       .controller('loginController', loginController);

function loginController($location){
  var self = this;

  self.redirectDashboard = redirectDashboard;

  function redirectDashboard() {
    $location.path('/dashboard');
  }
}
