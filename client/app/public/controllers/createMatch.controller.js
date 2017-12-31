angular.module("BoraJogar")
  .controller("createMatchController", function($scope, matchAPI, sports, $location, users, mailAPI, $localStorage){
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

    $scope.openMap = function(){
      $scope.isMapVisible = true;
    }

    $scope.convocar = function(){
      $scope.isModalActive = true;
    }

    $scope.confirmarConvocados = function(){
      $scope.isModalActive = false;
      $scope.match.atletasConvocados = $scope.atletasConvocados;
    }

    $scope.cancelar = function(){
      $scope.isModalActive = false;
      $scope.match.atletasConvocados = null;
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
      match.admin = $localStorage.user;
      matchAPI.newMatch(match).then(function(partidaInserida){

        //enviar os convites
        $location.path('/minhasPartidas');
      }).catch(function(error){
        console.error("Entrou no erro " + error);
      });
    }
    function geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        }, function(error){
          console.log(error);
        });
      }
    }
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
    var input = document.getElementById('searchTextField');
    var options = {
      types: ['establishment']
    };
    autocomplete = new google.maps.places.Autocomplete(input, options);
    geolocate();
    autocomplete.addListener('place_changed', definirLocal);
    function definirLocal(){
      var place = autocomplete.getPlace();
      console.log(place);
      $scope.match.local = {
        'nome': place.name,
        'endereco': place.formatted_address
      };
    }
});
