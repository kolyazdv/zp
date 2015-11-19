'use strict';

angular.module('zpApp')
  .controller('CompanyViewCtrl', function ($scope, $http, $stateParams) {
    $scope.companys = [];
    //console.log('Params: ', $stateParams.id);
    $scope.company = {
      name: '',
      info: '',
      address: ''
    };
    $http.get('/api/company/view/'+$stateParams.id).success(function(company) {
      $scope.company = company;
    });



    $scope.saveForm = function(company){
      console.log(company);
      $http.put('/api/company/'+company._id, company);
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
