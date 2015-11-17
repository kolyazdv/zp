'use strict';

angular.module('zpApp')
  .controller('HoldingCtrl', function ($scope, $http) {
    $scope.holdings = [];


    $http.get('/api/holding').success(function(holdings) {
      $scope.holdings = holdings;
    });

    $scope.addHolding = function() {
      if($scope.newHolding === '') {
        return;
      }
      $http.post('/api/holding', { name: $scope.newHolding });
      $scope.newHolding = '';
    };

      $scope.checkData = function(){
        console.log($scope.test);
      };

    $scope.deleteThing = function(holding) {
      $http.delete('/api/holding/' + holding._id);
    };
  });
