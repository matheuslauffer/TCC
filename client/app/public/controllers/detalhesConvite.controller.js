angular.module("BoraJogar")
  .controller("detalhesConviteController", function($scope, matchAPI, $localStorage, $routeParams){
    matchAPI.getDetails($routeParams).then(function(res){
      $scope.matchDetails = res.data[0];
      $scope.convidados = $scope.matchDetails.atletasConvocados;
      // $scope.icone = "flaticon-mark";
      $scope.convidados.forEach(function(arr){
        if(arr._id == $localStorage.user._id){
          $scope.confirmado = arr.confirmado;
        }
        if(arr.confirmado == true){
          arr.icone = "flaticon-mark";
        }else {
          arr.icone = "flaticon-close";
        }
      })
    });
    $scope.toggleConfirm = function(){
      matchAPI.confirmInvite($localStorage.user._id, $scope.matchDetails._id, $scope.confirmado).then(function(res){
        if ($scope.confirmado == true) {
          alert("Presença confirmada");
        }
        console.log(res);
      }).catch(function(err){
        console.log(err);
      });
    }

});
