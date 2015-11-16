'use strict';

angular.module('zpApp')
  .controller('RegionCtrl', function ($scope, $http) {
    $scope.companys = [];


    $http.get('/api/region').success(function(companys) {
      $scope.companys = companys;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/region', { name: $scope.newThing });
      $scope.newThing = '';
    };

      $scope.checkData = function(){
        console.log($scope.test);
      };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/region/' + thing._id);
    };
  });
