angular.module("BoraJogar")
       .controller('loginController', loginController);

function loginController($location, $scope, userAPI){
  var self = this;

  self.redirectDashboard = redirectDashboard;
  self.redirectCadastro = redirectCadastro;
  self.validaUser = validaUser;

  function redirectDashboard() {
    $location.path('/dashboard');
  }

  function redirectCadastro(){
    $location.path('/cadastro');
  }

  function validaUser(user){
    console.log(user);
    userAPI.validaUser(user).then(function(res){
      console.log(res);
    });
  }
}
