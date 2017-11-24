angular.module("BoraJogar")
  .factory("userAPI", function($http, config, $q){

    return {
      createUser: createUser
    }

    function createUser(user){
      return $http.post(config.baseUrl + '/create-user', user);
    };
});
