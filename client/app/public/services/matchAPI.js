angular.module("BoraJogar").factory("matchAPI", function($http, config, $q){

  return {
    newMatch: newMatch,
    getMyMatchs: getMyMatchs,
    getDetails: getDetails,
    getMyInvites: getMyInvites,
    confirmInvite: confirmInvite
  }

  function newMatch(match){
    return $http.post(config.baseUrl + '/createMatch', match);
  };

  function getMyMatchs(admin){
    return $http.post(config.baseUrl + '/getMyMatchs', admin);
  };

  function getDetails(id){
    return $http.get(config.baseUrl + '/getDetails/' + id.id);
  }

  function getMyInvites(admin){
    return $http.get(config.baseUrl + '/getMyInvites/'+ admin._id);
  }

  function confirmInvite(admin, match, confirmacao){
    var info = {"admin": admin, "match": match, "confirmacao": confirmacao};
    return $http.post(config.baseUrl + '/confirmInvite', info);
  }
});
