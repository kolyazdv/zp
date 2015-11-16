'use strict';

angular.module('zpApp')
  .controller('RegionViewCtrl', function ($scope, $http, $stateParams) {
    $scope.companys = [];
    //console.log('Params: ', $stateParams.id);
    $scope.company = {
      name: '',
      info: '',
      address: ''
    };
    $http.get('/api/region/'+$stateParams.id).success(function(region) {
      $scope.region = region;
    });



    $scope.saveForm = function(region){
      console.log(region);
      $http.put('/api/region/'+region._id, region);
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
