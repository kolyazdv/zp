'use strict';

angular.module('zpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('holding', {
        url: '/holding',
        templateUrl: 'app/holding/holding.html',
        controller: 'HoldingCtrl',
        authenticate: true
      })
      .state('view', {
        url: '/holding/:id',
        templateUrl: 'app/holding/view.html',
        controller: 'HoldingViewCtrl',
        authenticate: true
      })
    ;
  });