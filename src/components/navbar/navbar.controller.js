'use strict';

angular.module('mvp.nav', [])
.controller('NavbarCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.date = new Date();

  $scope.resetSignup = function () {
    console.log('reset');
  };
}]);