angular.module("BoraJogar")
       .controller('loginController', loginController);

function loginController($location, $scope, userAPI, $localStorage){
  var self = this;

  self.redirectCadastro = redirectCadastro;
  self.validaUser = validaUser;

  function redirectCadastro(){
    $location.path('/cadastro');
  }

  function validaUser(user){
    userAPI.validaUser(user).then(function(res){
      if(res.data.length > 0){
        $localStorage.user = res.data[0];
        $location.path('/dashboard');
      }else{
        alert("Revise suas credenciais de login");
      }
    });
  }
}
