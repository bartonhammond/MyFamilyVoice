'use strict';
/**
  * http://microblog.anthonyestebe.com/2013-11-30/window-resize-event-with-angular/ 
  */
angular.module('mfvApp')
  .directive('resizeable', function($window) {
    return function($scope) {
      $scope.initializeWindowSize = function() {
        $scope.windowWidth = $window.innerWidth + 'px';
        return $scope.windowWidth;
      };
      $scope.initializeWindowSize();
      return angular.element($window).bind('resize', function() {
        $scope.initializeWindowSize();
        return $scope.$apply();
      });
    };
  });
