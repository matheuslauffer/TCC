angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/login",{
    templateUrl : "/views/login.html",
    controller: 'loginController',
    controllerAs: 'ctrl'
  })
})
