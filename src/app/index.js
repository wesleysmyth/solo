'use strict';

angular.module('mvp', [
  'mvp.main',
  'mvp.search',
  'mvp.user',
  'mvp.nav',
  'mvp.calendar',
  'mvp.band',
  'ngAnimate', 
  'ngFx',
  'ui.router',
  'ui.bootstrap',
  'ui.calendar'
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
    .state('search', {
      url: '/search',
      abstract: true,
      templateUrl: 'app/search/search.html',
      controller: 'SearchController'
    })
    .state('search.bands', {
      url: '/bands',
      templateUrl: 'app/bands/bandsearch.html',
      controller: 'SearchController'
    })
    .state('search.venues', {
      url: '/venues',
      templateUrl: 'app/venues/venuesearch.html',
      controller: 'SearchController'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('bands', {
      url: '/bands',
      abstract: true,
      templateUrl: 'app/bands/bandProfile.html',
      controller: 'BandController'
    })
    .state('bands.BandOfHorses', {
      url: '/BandOfHorses',
      templateUrl: 'app/bands/bandofhorses.html',
      controller: 'BandController'
    })
    .state('bands.band', {
      url: '/:bandname',
      controller: function($stateParams) {
        $stateParams.bandname;
      },
      resolve: {
        bandname: ['$stateParams', function($stateParams){
            return $stateParams.bandname;
        }]
      }
    })
    .state('about', {
      url: '/about',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('/');
});
















