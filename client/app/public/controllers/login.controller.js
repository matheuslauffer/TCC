angular.module("BoraJogar")
       .controller('loginController', loginController);

function loginController($location, $scope, userAPI){
  var self = this;

  self.redirectCadastro = redirectCadastro;
  self.validaUser = validaUser;

  function redirectCadastro(){
    $location.path('/cadastro');
  }

  function validaUser(user){
    console.log(user);
    userAPI.validaUser(user).then(function(res){
      if(res.data.length > 0){
        $location.path('/dashboard');
      }else{
        alert("Revise suas credenciais de login");
        $location.path('/login');
      }
    });
  }
}
