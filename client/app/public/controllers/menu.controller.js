angular.module("BoraJogar").controller('menuController', function($scope, $location, $rootScope){
  var vm = this;
  vm.$onInit = init;

  function init() {
    verificarRota()
  }

  var rotasSemMenu = [
    '/login',
    '/cadastro'
  ]

  function verificarRota() {
    $rootScope.esconderMenu = rotasSemMenu.some(function(rota) {
      return $location.path() === rota;
    });
  }

  $rootScope.$on("verificar-menu", function() {
    verificarRota();
  })

  $scope.redirectDashboard = function(){
    $location.path("/dashboard");
  }
  $scope.redirectCreatematch = function(){
    $location.path("/create-match");
  }
  $scope.redirectMyMatchs = function(){
    $location.path("/minhasPartidas");
  }
});
