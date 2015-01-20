'use strict';

angular.module('mvp.user', [])
.controller('UserController', ['$scope', '$rootScope', '$state', '$window', 'Auth', function ($scope, $rootScope, $state, $window, Auth) {

  $scope.user = {};

  $scope.chosen = true;
  $scope.goBand = function() {
    $scope.chosen = false;
  };

  $scope.goVenue = function() {
    $scope.chosen = false;
  };

  $scope.signup = function () {
    console.log('signing up');
    Auth.signupBand($scope.user)
      .then(function (token) {
        console.log('made it to the promise land');
        $window.localStorage.setItem('com.mvp', token);
        $state.go('admin.band');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // var splitName = $stateParams.bandname.split(/(?=[A-Z])/);
  // console.log($stateParams);

  // $scope.bandname = $stateParams.bandname;
  // console.log($stateParams.bandname);
  // var ans = $stateParams.bandname
  // // console.log(ans.split(/(?=[A-Z])/));
  // var that = $scope;
  // setTimeout(function() {
  //   that.bandname = ans.split(/(?=[A-Z])/).join(' ');
  //   console.log(that);
  // }, 1000);
  // $scope.itemId = $stateParams.itemId;

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
