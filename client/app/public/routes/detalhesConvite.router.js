angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/detalhesConvite/:id", {
    templateUrl : "/views/detalhesConvite.html",
    controller: 'detalhesConviteController',
    controllerAs: 'ctrl',
    resolve:{
       validarRota: function($rootScope) {
         $rootScope.$emit("verificar-menu");
         return
       }
    }
  });
});
