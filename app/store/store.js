'use strict';

angular.module('seedApp.store', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/store', {
    templateUrl: 'store/store.html',
    controller: 'StoreCtrl'
  });


}])

.controller('StoreCtrl', ['$scope', '$http', function($scope,$http) {
    $http({
      method: 'GET',
      url: '/app/data/seedDB.json'
    }).then(function successCallback(response) {
        $scope.seeds = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
}]);
