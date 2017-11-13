angular.module("BoraJogar").factory("sportsAPI", function($http, config){
  var _getSports = function(){
    return $http.get(config.baseUrl + '/sports');
  };
  return{
    getSports: _getSports
  };
});
