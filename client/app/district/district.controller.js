'use strict';

angular.module('zpApp')
  .controller('DistrictCtrl', function ($scope, $http, $state) {
    $scope.districts = [];
    $scope.regionID = $state.params.regionID;

   // console.log($state);
    $scope.loadData = function(){
      $http.get('/api/district/'+$state.params.regionID).success(function(districts) {
        $scope.districts = districts;
      });
    };
    $scope.loadData();

    $scope.addDistrict = function() {
      if($scope.newDistrict === '') {
        return;
      }
      $http.post('/api/district', { name: $scope.newDistrict });
      $scope.newDistrict = '';
    };

    $scope.removeDistrict = function(district){
      swal({
          title: "Точно удалить?",
          text: "Удаляем район и все компании которые входят в него!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Да, удалить!",
          cancelButtonText: "Нет, не удалять!",
          closeOnConfirm: false
        },
        function(){
          $http.delete('/api/district/'+district._id).then(function(){
            swal("Удалили", "Район "+district.name+" был успешно удален.", "success");
            $scope.loadData();
          });
        });
    //  console.log(district);
    };


      $scope.checkData = function(){
        console.log($scope.test);
      };

    $scope.deleteDistrict = function(district) {
      $http.delete('/api/district/' + district._id);
    };
  });
