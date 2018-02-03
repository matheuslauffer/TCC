angular.module("BoraJogar").controller('dashboardController', function($scope, $location, $localStorage, matchAPI){
    matchAPI.getMyMatchs($localStorage.user).then(function(res){
      $scope.nextMatch = res.data[0];
    }).catch(function(error){
      console.log(error);
    });

    matchAPI.getMyInvites($localStorage.user).then(function(res){
      $scope.invites = res.data;
    }).catch(function(error){
      console.log(error);
    });

  $scope.redirectCreateMatch = function() {
    $location.path('/create-match');
  }
});
