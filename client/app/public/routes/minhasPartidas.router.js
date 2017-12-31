angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/minhasPartidas", {
    templateUrl : "/views/minhasPartidas.html",
    controller: 'minhasPartidasController',
    controllerAs: 'ctrl',
    resolve:{
       validarRota: function($rootScope) {
         $rootScope.$emit("verificar-menu");
         return
       }
    }
  });
});
