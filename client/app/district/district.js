'use strict';

angular.module('zpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('district', {
        url: '/district',
        templateUrl: 'app/district/district.html',
        controller: 'DistrictCtrl',
        authenticate: true
      })
      .state('districtList', {
        url: '/district/list/:regionID',
        templateUrl: 'app/district/district.html',
        controller: 'DistrictCtrl',
        authenticate: true
      })
      .state('newDistrict', {
        url: '/district/new/:regionID',
        templateUrl: 'app/district/new.html',
        controller: 'NewDistrictCtrl',
        authenticate: true
      })
      .state('districtView', {
        url: '/district/:id',
        templateUrl: 'app/district/view.html',
        controller: 'DistrictViewCtrl',
        authenticate: true
      })
    ;
  });