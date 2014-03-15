'use strict';

angular.module('mfvApp')
  .controller('RecordCtrl', function ($scope, TouchDevice) {
    var self = this;
    $scope.touch = TouchDevice;
    $scope.init = function() {
      console.log('barton init');

    };
    self.getTwilio = function() {
      Parse.Cloud.run('getToken')
        .then(
          function(data) {
            console.log(data);
            try {
              console.log('calling Twilio.Device.setup');
              Twilio.Device.setup(data,{'debug':true});
              Twilio.Device.connect({activity: 'iyIY4p6GcQ',
                                     user: 'qR5HcfUdnq'});
              Twilio.Connection.setSpeaker('on');
              console.log('calling Twilio.Device.setup: successful');
            } catch(e) {
              console.log('Twilio.Device.setup failed: ' + e.message);
            }
          });
    };

    $scope.startRecording = function() {
      try {
        console.log('calling twilio connect');
        self.getTwilio();
        console.log('finished calling twilio connect');
      }catch(e) {
        console.log('error calling twilio.connect: ' + e.message);
      }
    };
    $scope.stopRecording = function() {
      console.log('stopRecording');
      self.connection.sendDigits('#');

    };
    Twilio.Device.connect(function(conn) {
      console.log('Twilio connected');
      self.connection = conn;
    });
    Twilio.Device.disconnect(function (conn) {
      self.connection = conn;
      Twilio.Connection.setSpeaker('off');
    });

  });
