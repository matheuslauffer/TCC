angular.module("BoraJogar")
  .controller("newMatchController", function($scope, matchAPI, sports, $location){
    $scope.sports = sports.data;
    $scope.carregarNumeroDeJogadores = carregarNumeroDeJogadores;
    $scope.match = {};

    function carregarNumeroDeJogadores(esporteSelecionado) {
      if (esporteSelecionado) {
        $scope.minimoDeJogadores = $scope.sports.filter(filtrarEsporteSelecionado(esporteSelecionado.nome))[0].quantidade_min;
        $scope.match.numeroJogadores = $scope.minimoDeJogadores;
      } else{
        $scope.minimoDeJogadores = 0;
        $scope.match.numeroJogadores = undefined;
      }
    }

    function filtrarEsporteSelecionado(esporteSelecionado) {
      return function (sport) {
        return sport.nome === esporteSelecionado
      }
    }

    $scope.createMatch = function(match){
      matchAPI.newMatch(match).then(function(data){
        $location.path("/dashboard");
      }).catch(function(error){
        console.error(error);
      });
    }
});
