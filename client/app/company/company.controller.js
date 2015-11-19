'use strict';

//angular.module('zpApp')
//  .controller('CompanyCtrl', function ($scope, $http) {
//    $scope.companys = [];
//
//
//    $http.get('/api/company').success(function(companys) {
//      $scope.companys = companys;
//    });
//
//    $scope.addThing = function() {
//      if($scope.newThing === '') {
//        return;
//      }
//      $http.post('/api/company', { name: $scope.newThing });
//      $scope.newThing = '';
//    };
//
//      $scope.checkData = function(){
//        console.log($scope.test);
//      };
//
//    $scope.deleteThing = function(thing) {
//      $http.delete('/api/company/' + thing._id);
//    };
//  });

angular.module('zpApp')
  .controller('CompanyCtrl', function ($scope, $http, $state) {
    console.log($state);
    $scope.companies = [];
    $scope.districtID = $state.params.districtID;
    $scope.loadData = function(){
      $http.get('/api/company/'+$state.params.districtID).success(function(companies) {
        $scope.companies = companies;
      });
    };
    $scope.loadData();

    $scope.addCompany = function() {
      if($scope.newCompany === '') {
        return;
      }
      $http.post('/api/company', { name: $scope.newCompany });
      $scope.newCompany = '';
    };

    $scope.removeDistrict = function(district){
      swal({
          title: "Точно удалить?",
          text: "Удаляем компанию и все данные которые входят в нее!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Да, удалить!",
          cancelButtonText: "Нет, не удалять!",
          closeOnConfirm: false
        },
        function(){
          $http.delete('/api/company/'+company._id).then(function(){
            swal("Удалили", "Компания "+company.name+" была успешно удалена.", "success");
            $scope.loadData();
          });
        });
      //  console.log(district);
    };


    $scope.checkData = function(){
      console.log($scope.test);
    };

    $scope.deleteCompany = function(company) {
      $http.delete('/api/company/' + company._id);
    };
  });
