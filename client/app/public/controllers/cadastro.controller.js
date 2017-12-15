angular.module("BoraJogar")
  .controller("cadastroController", function($scope, userAPI, $location){
    $scope.createUser = function(user){
      userAPI.createUser(user).then(function(data){
         $location.redirect("/login");
      }).catch(function(error){
         console.error(error);
      });
    }
});
