'use strict';

angular.module('zpApp')
  .controller('HoldingViewCtrl', function ($scope, $http, $stateParams) {
    $scope.companys = [];
    //console.log('Params: ', $stateParams.id);
    $scope.holding = {
      name: '',
      info: '',
      address: ''
    };
    $http.get('/api/holding/'+$stateParams.id).success(function(holding) {
      $scope.holding = holding;
    });



    $scope.saveForm = function(holding){
      console.log(holding);
      $http.put('/api/holding/'+holding._id, holding);
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
