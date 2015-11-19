'use strict';

angular.module('zpApp')
  .controller('DistrictViewCtrl', function ($scope, $http, $stateParams, $state) {
    $scope.companys = [];
    console.log('Params: ', $stateParams.id);
    $scope.company = {
      name: '',
      info: '',
      address: ''
    };
    $http.get('/api/district/view/'+$stateParams.id).success(function(district) {
      $scope.district = district;
    });



    $scope.saveForm = function(district){
      $http.put('/api/district/'+district._id, district);
      console.log(district._region);
      $state.go('districtList', {regionID: district._region});
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
