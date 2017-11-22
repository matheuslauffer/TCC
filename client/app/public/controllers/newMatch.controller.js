angular.module("BoraJogar")
  .controller("newMatchController", function($scope, matchAPI, sports, $location){
    $scope.sports = sports.data;

    $scope.createMatch = function(match){
      matchAPI.newMatch(match).then(function(data){
        $location.path("/dashboard");
      }).catch(function(error){
        console.error(error);
      });
    }
});
