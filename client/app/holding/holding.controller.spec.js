'use strict';

describe('Controller: HoldingCtrl', function () {

  // load the controller's module
  beforeEach(module('zpApp'));

  var HoldingCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/holdings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    HoldingCtrl = $controller('HoldingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of holdings to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeHoldings.length).toBe(4);
  });
});
