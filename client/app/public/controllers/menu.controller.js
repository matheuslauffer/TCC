angular.module("BoraJogar").controller('menuController', function($scope, $location){
  $scope.redirectDashboard = function(){
    $location.path("/dashboard");
  }
  $scope.redirectCreatematch = function(){
    $location.path("/create-match");
  }
});
