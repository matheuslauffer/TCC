angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/login",{
    templateUrl : "/views/login.html",
    controller: 'loginController',
    controllerAs: 'ctrl',
    resolve:{
      validarRota: function($rootScope) {
        $rootScope.$emit("verificar-menu");
        return
      }
    }
  })
  .when("/",{
    resolve:{
      redirectLogin: redirectLogin
    }
  });
  function redirectLogin($location) {
    $location.path('/login')
  }
})
