angular.module("BoraJogar")
  .controller("detalhesPartidaController", function($scope, matchAPI, $localStorage, $routeParams){
    matchAPI.getDetails($routeParams).then(function(res){
      $scope.matchDetails = res.data[0];
      console.log($scope.matchDetails);
    });
});
