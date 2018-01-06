angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/detalhesPartida/:id", {
    templateUrl : "/views/detalhesPartida.html",
    controller: 'detalhesPartidaController',
    controllerAs: 'ctrl',
    resolve:{
       validarRota: function($rootScope) {
         $rootScope.$emit("verificar-menu");
         return
       }
    }
  });
});
