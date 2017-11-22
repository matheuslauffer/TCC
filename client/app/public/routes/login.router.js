angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/login",{
    templateUrl : "/views/login.html",
    controller: 'loginController',
    controllerAs: 'ctrl'
  }).when("/",{
    resolve:{
      redirectLogin: redirectLogin
    }
  });
  function redirectLogin($location) {
    $location.path('/login')
  }
})
