'use strict';

angular.module('seedApp.store', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/store', {
    templateUrl: 'store/store.html',
    controller: 'StoreCtrl'
  });
}])

.controller('StoreCtrl', [function() {

}]);
