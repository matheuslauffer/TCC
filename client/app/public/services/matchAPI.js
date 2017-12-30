angular.module("BoraJogar").factory("matchAPI", function($http, config, $q){

  return {
    newMatch: newMatch,
    getMyMatchs: getMyMatchs
  }

  function newMatch(match){
    return $http.post(config.baseUrl + '/createMatch', match);
  };

  function getMyMatchs(admin){
    return $http.post(config.baseUrl + '/getMyMatchs/'+ admin);
  };
});
