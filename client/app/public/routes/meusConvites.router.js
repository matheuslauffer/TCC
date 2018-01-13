angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/meusConvites", {
    templateUrl : "/views/meusConvites.html",
    controller: 'meusConvitesController',
    controllerAs: 'ctrl',
    resolve:{
       validarRota: function($rootScope) {
         $rootScope.$emit("verificar-menu");
         return
       }
    }
  });
});
