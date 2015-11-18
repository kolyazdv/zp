'use strict';

angular.module('zpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('region', {
        url: '/region',
        templateUrl: 'app/region/region.html',
        controller: 'RegionCtrl',
        authenticate: true
      })
      .state('newRegion', {
        url: '/region/new',
        templateUrl: 'app/region/new.html',
        controller: 'NewRegionCtrl',
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