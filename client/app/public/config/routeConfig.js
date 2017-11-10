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
  }).when("/",{
    resolve:{
      redirectLogin: redirectLogin
    }
  });

  $routeProvider.when("/login",{
    templateUrl : "/views/login.html"
  }).when("/",{
    resolve:{
      redirectLogin: redirectLogin
    }
  });

  function redirectLogin($location) {
    $location.path('/login')
  }
})
