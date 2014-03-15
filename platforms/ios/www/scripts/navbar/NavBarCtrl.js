'use strict';

angular.module('mfvApp')
  .controller('NavBarCtrl', function ($scope, $location) {
    $scope.offCanvas = false;
    $scope.toggle = function() {
      $scope.offCanvas = ! $scope.offCanvas;
    };
    $scope.offCanvasClass = function() {
      return $scope.offCanvas ? 'active' : undefined;
    };
    $scope.record = function() {
      $location.path('/record');
    };
  });
