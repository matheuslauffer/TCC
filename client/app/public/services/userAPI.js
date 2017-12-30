angular.module("BoraJogar")
  .factory("userAPI", function($http, config, $q){

    return {
      createUser: createUser,
      getAllUsers: getAllUsers,
      validaUser: validaUser
    }

    function createUser(user){
      return $http.post(config.baseUrl + '/create-user', user);
    };

    function getAllUsers(){
      return $http.get(config.baseUrl + '/get-all-users');
    };

    function validaUser(user){
      return $http.post(config.baseUrl + '/validaUser', user);
    }
});
