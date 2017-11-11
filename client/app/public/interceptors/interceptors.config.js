angular.module("BoraJogar").config(function($httpProvider){
  $httpProvider.interceptors.push("loadingInterceptor");
  $httpProvider.interceptors.push("errorInterceptor");
});
