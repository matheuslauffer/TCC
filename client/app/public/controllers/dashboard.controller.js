angular.module("BoraJogar").controller('dashboardController', dashboardController);

function dashboardController($location){
  var self = this;

  self.redirectCreateMatch = redirectCreateMatch;

  function redirectCreateMatch() {
    $location.path('/create-match');
  }
}
