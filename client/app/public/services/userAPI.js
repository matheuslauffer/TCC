angular.module("BoraJogar")
  .factory("userAPI", function($http, config, $q){

    return {
      createUser: createUser,
      getAllUsers: getAllUsers
    }

    function createUser(user){
      return $http.post(config.baseUrl + '/create-user', user);
    };

    function getAllUsers(){
      return $http.get(config.baseUrl + '/get-all-users');
    }
});
