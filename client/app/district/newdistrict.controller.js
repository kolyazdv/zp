'use strict';

angular.module('zpApp')
  .controller('NewDistrictCtrl', function ($scope, $http, $stateParams, $state) {
    //console.log('Params: ', $stateParams.id);
    $scope.district = {
      name: '',
      info: ''
    };

    //$scope.district = $stateParams.districtID;


    $scope.saveForm = function(district){
      district._region = $state.params.regionID;
      $http.post('/api/district/', district).then(function(response){
        console.log(district);
        $state.go('districtList', {regionID: district._region});
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
