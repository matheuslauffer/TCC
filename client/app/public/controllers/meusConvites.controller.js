angular.module("BoraJogar")
  .controller("meusConvitesController", function($scope, matchAPI, $location, $localStorage){
    $scope.matchs = {};
    $scope.teste = "testando";

    matchAPI.getMyInvites($localStorage.user).then(function(res){
      $scope.matchs = res.data;
    }).catch(function(error){
      console.log(error);
    });

    $scope.openInfo = function(match){
      $location.path("/detalhesConvite/" + match);
    }
});
