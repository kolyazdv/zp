'use strict';

angular.module('zpApp')
  .controller('NewRegionCtrl', function ($scope, $http, $stateParams, $state) {
    //console.log('Params: ', $stateParams.id);
    $scope.region = {
      name: '',
      info: ''
    };

    //$scope.district = $stateParams.districtID;


    $scope.saveForm = function(region){
      $http.post('/api/region/', region).then(function(response){
        $state.go('region');
      });
    };

    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/company', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
    //
    //  $scope.checkData = function(){
    //    console.log($scope.test);
    //  };
    //
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/company/' + thing._id);
    //};
  });
