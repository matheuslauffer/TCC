angular.module("BoraJogar")
  .controller("createMatchController", function($scope, matchAPI, sports, $location, users, mailAPI){
    $scope.sports = sports.data;
    $scope.carregarNumeroDeJogadores = carregarNumeroDeJogadores;
    $scope.match = {};
    $scope.users = users.data;
    $scope.numAtletas = 0;
    $scope.atletasConvocados = [];

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


    $scope.convocar = function(){
      $scope.isModalActive = true;
    }

    $scope.confirmarConvocados = function(){
      $scope.isModalActive = false;
      $scope.match.atletasConvocados = $scope.atletasConvocados;
    }

    $scope.verificaSelecionado = function (users) {
      $scope.numAtletas = 0;
      $scope.atletasConvocados = [];
      users.forEach(function(user){
        if(user.selecionado){
          $scope.atletasConvocados.push(user);
          $scope.numAtletas ++;
        }
      });
    }
    $scope.createMatch = function(match){
      matchAPI.newMatch(match).then(function(partidaInserida){
        console.log(partidaInserida.data.insertedIds[0]);
        mailAPI.sendInvite(partidaInserida.data.insertedIds[0]).then(function(){
            console.log("Entrou");
          }).catch(function(error){
            console.error("Entrou no erro 1 " + error);
          });
      }).catch(function(error){
        console.error("Entrou no erro 2 " + error);
      });
    }
});
