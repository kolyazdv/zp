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
          title: "Точно удалить?",
          text: "Удаляем область и все районы и компании которые входят в него!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Да, удалить!",
          cancelButtonText: "Нет, не удалять!",
          closeOnConfirm: false
        },
        function(){
          $http.delete('/api/region/'+region._id).then(function(){
            swal("Удалили", "Регион/Область "+region.name+" был успешно удален(а).", "success");
            $scope.loadData();
          });
        });
    //  console.log(region);
    };


      $scope.checkData = function(){
        console.log($scope.test);
      };

    $scope.deleteRegion = function(region) {
      $http.delete('/api/region/' + region._id);
    };
  });
