angular.module("BoraJogar")
  .controller("detalhesPartidaController", function($scope, matchAPI, $localStorage, $routeParams){
    matchAPI.getDetails($routeParams).then(function(res){
      $scope.matchDetails = res.data[0];
      $scope.convidados = $scope.matchDetails.atletasConvocados;
      $scope.convidados.forEach(function(arr){
        if(arr.confirmado == true){
          $scope.icone = "flaticon-mark";
        }else {
          $scope.icone = "flaticon-close";
        }
      })
    });
});
