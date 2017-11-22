angular.module("BoraJogar").config(function($routeProvider){
  $routeProvider.when("/dashboard",{
    templateUrl : "/views/dashboard.html",
    controller: 'dashboardController',
    controllerAs: 'ctrl',
    resolve:{
      teste: function () {
        console.log('ZAQUIASDIA SODIUASOIDUOIA SUDOIAS PIDASOI DUOSAI');
      }
    }
  })
})
