angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/dashboard",{
    templateUrl : "/views/dashboard.html"
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
