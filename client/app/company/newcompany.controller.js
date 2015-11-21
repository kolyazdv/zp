'use strict';

angular.module('zpApp')
  .controller('NewCompanyCtrl', function ($scope, $http, $stateParams, $state) {
    //console.log('Params: ', $stateParams.id);
    $scope.company = {
      name: '',
      info: '',
      address: '',
      color: 1
    };

    //$scope.district = $stateParams.districtID;


    $scope.saveForm = function(company){
      company._district = $state.params.districtID;
      console.log(company);
      $http.post('/api/company/', company);
      $state.go('companyList', {districtID: company._district});
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
