angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/dashboard",{
    templateUrl : "/views/dashboard.html"
  })
  .when("/",{
    resolve:{
      redirectLogin: redirectLogin
    }
  });

  $routeProvider.when("/createMatch",{
    templateUrl : "/views/createMatch.html"
  })

  function redirectLogin($location) {
    $location.path('/login')
  }
})
