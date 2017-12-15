angular.module("BoraJogar").factory("mailAPI", function($http, config, $q){

  return {
    sendInvite: sendInvite
  }

  function sendInvite(idPartida){
    return $http.get(config.baseUrl + '/sendInvite/'+ idPartida);
  };
});
