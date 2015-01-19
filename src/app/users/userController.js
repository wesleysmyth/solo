'use strict';

angular.module('mtest2')
  .controller('UserController', function ($scope) {
    
    $scope.chosen = true;

    $scope.goBand = function() {
      $scope.chosen = false;
    };

    $scope.goVenue = function() {
      $scope.chosen = false;
    };

  });
