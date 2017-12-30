angular.module("BoraJogar").controller('dashboardController', function($scope, $location, $localStorage){

  $scope.redirectCreateMatch = function() {
    $location.path('/create-match');
  }
});
