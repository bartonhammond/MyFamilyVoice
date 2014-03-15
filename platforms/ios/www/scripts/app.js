'use strict';

angular.module('mfvApp', [
  'ngRoute', 'ngTouch'
])
  .provider('TouchDevice', function() {
    var deviceType = false;
    return {
      setTouchDevice: function() {
        deviceType = true;
      },
      $get: function() {
        return {
          type: deviceType
        };
      }
    };
  })
  .config(function(TouchDeviceProvider) {
    if (Modernizr.touch) {
      TouchDeviceProvider.setTouchDevice();
    }
  })
  .config(function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|content):/);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/record', {
        templateUrl: 'views/record.html',
        controller: 'RecordCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function() {
    console.log('calling Parse.initialize');
    try {
      Parse.initialize('6stx2NYQVpHKrlYL28NegU4vYAV76VRPWqMwAvZd',
                       'Exehq2ao7JVaSrq2LrBwPF1iehv8cYsGIKfBWsqS');
    } catch(e) {
      console.log('error with Parse.initialize: ' + e.message);
    }
    console.log('finished Parse.initialize');
  });
