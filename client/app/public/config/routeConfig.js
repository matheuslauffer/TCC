angular.module("BoraJogar").config(function($routeProvider, $locationProvider){
  $routeProvider.when("/error",{
    templateUrl: "/views/error.html"
  })
})
