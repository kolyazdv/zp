'use strict';

angular.module('zpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('region', {
        url: '/region',
        templateUrl: 'app/region/region.html',
        controller: 'CompanyCtrl',
        authenticate: true
      })
      .state('regionView', {
        url: '/region/:id',
        templateUrl: 'app/region/view.html',
        controller: 'RegionViewCtrl',
        authenticate: true
      })
    ;
  });