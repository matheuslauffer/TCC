angular.module("BoraJogar").config(function($routeProvider, $locationProvider){
  $routeProvider.when("/dashboard",{
    templateUrl : "/views/dashboard.html"
  })
  .when("/",{
    resolve:{
      redirectLogin: redirectLogin
    }
  });
  //$locationProvider.html5Mode(true);
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
  $routeProvider.when("/error",{
    templateUrl: "/views/error.html"
  })

  function redirectLogin($location) {
    $location.path('/login')
  }

})
