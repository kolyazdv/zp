'use strict';

angular.module('zpApp')
  .controller('CompanyCtrl', function ($scope, $http) {
    $scope.companys = [];


    $http.get('/api/company').success(function(companys) {
      $scope.companys = companys;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/company', { name: $scope.newThing });
      $scope.newThing = '';
    };

      $scope.checkData = function(){
        console.log($scope.test);
      };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/company/' + thing._id);
    };
  });
