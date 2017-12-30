angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/minhasPartidas", {
    templateUrl : "/views/minhasPartidas.html",
    controller: 'minhasPartidasController',
    controllerAs: 'ctrl',
    resolve:{
      matchs: function(matchAPI){
         return matchAPI
                  .getMyMatchs($localStorage.user)
                  .catch(function (error) {
                    console.error(error);
                    return []
                  })
       },
       validarRota: function($rootScope) {
         $rootScope.$emit("verificar-menu");
         return
       },
    }
  })
})
