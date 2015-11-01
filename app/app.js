'use strict';

angular.module('seedApp', [
  'ngRoute',
  'seedApp.store'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/store'});
}]);
