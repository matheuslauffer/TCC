angular.module("BoraJogar").factory("matchAPI", function($http, config, $q){

  return {
    newMatch: newMatch
  }

  function newMatch(match){
    console.log(match);
    return $http.post(config.baseUrl + '/create-match', match);
  };
});
