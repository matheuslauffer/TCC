angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/cadastro",{
    templateUrl : "/views/cadastro.html",
    controller: 'cadastroController',
    controllerAs: 'ctrl',
    resolve:{
      validarRota: function($rootScope) {
        $rootScope.$emit("verificar-menu");
        return
      }
    }
  })
})
