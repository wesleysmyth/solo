'use strict';

angular.module('mtest2', [
  'ngAnimate', 
  'ui.router',
  'ui.bootstrap'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'MainCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/users/signup.html',
      controller: 'UserController'
    })
    .state('signup.band', {
      url: '/band',
      templateUrl: 'app/users/bandsignup.html',
      controller: 'UserController'
    })
    .state('signup.venue', {
      url: '/venue',
      templateUrl: 'app/users/venuesignup.html',
      controller: 'UserController'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('/');
})
.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    // console.log('toState: ', toState)
    // console.log('fromState: ', fromState)
    if ((toState.url === '/band' || toState.url === '/venue') && fromState.url !== '/signup'){
      console.log('right');
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
















