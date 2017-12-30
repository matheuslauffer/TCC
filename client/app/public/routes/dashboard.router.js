angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/dashboard",{
    templateUrl : "/views/dashboard.html",
    controller: 'dashboardController',
    controllerAs: 'ctrl',
    resolve:{
      validarRota: function($rootScope) {
        $rootScope.$emit("verificar-menu");
        return
      }
    }
  })
})
