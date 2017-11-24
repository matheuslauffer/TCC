angular.module("BoraJogar")
       .controller('loginController', loginController);

function loginController($location){
  var self = this;

  self.redirectDashboard = redirectDashboard;
  self.redirectCadastro = redirectCadastro;

  function redirectDashboard() {
    $location.path('/dashboard');
  }

  function redirectCadastro(){
    $location.path('/cadastro');
  }
}
