'use strict';

angular.module('mvp.user', [])
.controller('UserController', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $scope.chosen = true;
  $scope.goBand = function() {
    $scope.chosen = false;
  };

  $scope.goVenue = function() {
    $scope.chosen = false;
  };

}])
.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    // console.log('toState: ', toState)
    // console.log('fromState: ', fromState)
    if ((fromState.url === '/band' || fromState.url === '/venue') && toState.url === '/signup'){
      // $state.go('signup');
      console.dir(fromState);
    }

    // if (toState.needsAuthentication && !Auth.isAuth()) { 
    //   event.preventDefault();
    //   // console.log($state);
    //   // $location.path('/signin');
    //   // $state.go('signin');
    //   $state.go('signin');
    // }
  });
});
