angular.module("BoraJogar")
  .controller("minhasPartidasController", function($scope, matchAPI, $location, $localStorage){
    $scope.matchs = {};
    console.log($localStorage.user);
    matchAPI.getMyMatchs($localStorage.user).then(function(res){
      $scope.matchs = res.data;
    }).catch(function(error){
      console.log(error);
    });
});
