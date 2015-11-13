'use strict';

angular.module('zpApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

      $scope.checkData = function(){
        console.log($scope.test);
      };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
