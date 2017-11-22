angular.module("BoraJogar").factory("sportsAPI", function($http, config, $q){

  return {
    getSports: getSports
  }

  function getSports(){
    return $http.get(config.baseUrl + '/sports');
  };
});
