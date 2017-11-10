angular.module("BoraJogar").config(function($httpProvider){
  $httpProvider.interceptors.push("loadingInterceptor");
});
