'use strict';

angular.module('mvp', [
  'mvp.main',
  'mvp.user',
  'mvp.nav',
  'ngAnimate', 
  'ngFx',
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
    .state('login', {
      url: '/login',
      templateUrl: 'app/users/login.html',
      controller: 'UserController'
    })
    .state('login.band', {
      url: '/band',
      templateUrl: 'app/users/bandlogin.html',
      controller: 'UserController'
    })
    .state('login.venue', {
      url: '/venue',
      templateUrl: 'app/users/venuelogin.html',
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
});
















