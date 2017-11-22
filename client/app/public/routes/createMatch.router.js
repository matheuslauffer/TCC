angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/create-match", {
    templateUrl : "/views/createMatch.html",
    controller: 'newMatchController',
    controllerAs: 'ctrl',
    resolve:{
      sports: function(sportsAPI){
         return sportsAPI
                  .getSports()
                  .catch(function (error) {
                    console.error(error);
                    return []
                  })
       }
    }
  })
})
