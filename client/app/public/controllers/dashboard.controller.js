angular.module("BoraJogar").controller('dashboardController', function($scope, $location){

  $scope.redirectCreateMatch = function() {
    $location.path('/create-match');
  }
});
