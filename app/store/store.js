'use strict';

angular.module('seedApp.store', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/store', {
    templateUrl: 'store/store.html',
    controller: 'StoreCtrl'
  })
  .when('/store/:productId', {
    templateUrl: 'store/product.html',
    controller: 'ProductCtrl'
  });

}])

.factory('getProductsSrv', function($http) {
    return {
        getProducts: function() {
            var url = '/app/data/seedDB.json';
            return $http.get(url);
        }
    };
})

.controller('StoreCtrl', ['$scope', 'getProductsSrv', function($scope, getProductsSrv) {
    getProductsSrv.getProducts().success(function(seeds) {$scope.seeds = seeds});
}])

.controller('ProductCtrl', ['$scope', '$routeParams', '$filter', 'getProductsSrv', function($scope, $routeParams, $filter, getProductsSrv) {
    var productId = $routeParams.productId;
    getProductsSrv.getProducts().success(function(seeds) {
        var seedsData = seeds;
        $scope.seed = $filter('filter')(seedsData, function(seeds){
            return seeds.id == productId;
        })[0];
    });
}]);
