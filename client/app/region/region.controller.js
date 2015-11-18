'use strict';

angular.module('zpApp')
  .controller('RegionCtrl', function ($scope, $http) {
    $scope.regions = [];


    $scope.loadData = function(){
      $http.get('/api/region').success(function(regions) {
        $scope.regions = regions;
      });
    };
    $scope.loadData();

    $scope.addRegion = function() {
      if($scope.newRegion === '') {
        return;
      }
      $http.post('/api/region', { name: $scope.newRegion });
      $scope.newRegion = '';
    };

    $scope.removeRegion = function(region){
      swal({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: false
        },
        function(){
          $http.delete('/api/region/'+region._id).then(function(){
            swal("Deleted!", "Регион "+region.name+" был успешно удален.", "success");
            $scope.loadData();
          });
        });
      console.log(region);
    };


      $scope.checkData = function(){
        console.log($scope.test);
      };

    $scope.deleteRegion = function(region) {
      $http.delete('/api/region/' + region._id);
    };
  });
