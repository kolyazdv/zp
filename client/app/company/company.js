'use strict';

angular.module('zpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company', {
        url: '/company',
        templateUrl: 'app/company/company.html',
        controller: 'CompanyCtrl',
        authenticate: true
      })
      .state('view', {
        url: '/company/:id',
        templateUrl: 'app/company/view.html',
        controller: 'CompanyViewCtrl',
        authenticate: true
      })
    ;
  });