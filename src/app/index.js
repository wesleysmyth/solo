'use strict';
angular.module('mvp', [
  'mvp.main',
  'mvp.search',
  'mvp.user',
  'mvp.nav',
  'mvp.calendar',
  'mvp.band',
  'mvp.services',
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
    .state('bands.TheBand', {
      url: '/TheBand',
      templateUrl: 'app/bands/theband.html',
      controller: 'BandController'
    })
    .state('bands.SigurRos', {
      url: '/SigurRos',
      templateUrl: 'app/bands/sigurros.html',
      controller: 'BandController'
    })
    .state('venues', {
      url: '/venues',
      abstract: true,
      templateUrl: 'app/venues/venueprofile.html',
      controller: 'BandController'
    })
    .state('venues.MusicHallOfWillamsburg', {
      url: '/MusicHallOfWilliamsburg',
      templateUrl: 'app/venues/mhow.html',
      controller: 'BandController'
    })
    .state('venues.FillmoreEast', {
      url: '/FillmoreEast',
      templateUrl: 'app/venues/fillmoreeast.html',
      controller: 'BandController'
    })
    .state('venues.Echoplex', {
      url: '/Echoplex',
      templateUrl: 'app/venues/echoplex.html',
      controller: 'BandController'
    })
    .state('admin', {
      url: '/admin',
      abstract: true,
      templateUrl: 'app/users/admin.html',
      controller: 'SearchController'
    })
    .state('admin.band', {
      url: '/:bandname',
      templateUrl: 'app/users/adminband.html',
      controller: 'SearchController'
    })
    .state('admin.band.message', {
      url: '/message',
      templateUrl: 'app/users/bandmessage.html',
      controller: 'SearchController'
    })
    .state('admin.venue', {
      url: '/:venuename',
      templateUrl: 'app/users/adminvenue.html',
      controller: 'SearchController'
    })
    .state('admin.venue.message', {
      url: '/message',
      templateUrl: 'app/users/venuemessage.html',
      controller: 'SearchController'
    })
    .state('messageLand', {
      url: '/messageLand',
      templateUrl: 'app/users/messageLand.html',
      controller: 'SearchController'
    });

  $urlRouterProvider.otherwise('/');
});




// .state('bands.band', {
    //   url: '/:bandname',
    //   controller: function($stateParams) {
    //     $stateParams.bandname;
    //   },
    //   resolve: {
    //     bandname: ['$stateParams', function($stateParams){
    //         return $stateParams.bandname;
    //     }]
    //   }
    // })












