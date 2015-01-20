'use strict';

angular.module('mvp.search', [])
.controller('SearchController', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $scope.searchBands = function() {

  };

  $scope.bands = [
  {
    picture: 'assets/images/BOH.jpg',
    bio: 'We are an amazing band of people who sing about things.  All of the things.  There are horses and such and more and more and more and more and stuff as well as other things.',
    name: 'Band Of Horses',
    city: 'San Francisco',
    genres: ['Folk, ', 'Rock, ', 'Indie']
  },
  {
    picture: 'assets/images/theband.jpg',
    bio: 'We\'re the band, we\'re the best band.  Etc. La la la la la.  Used to play for Dylan.  LEVON FOR LIFE.  Oh yeah listen to our stuff!',
    name: 'The Band',
    city: 'New York',
    genres: ['Rock, ', 'Folk, ', 'Classic Rock']
  },
  {
    picture: 'assets/images/sigur.jpg',
    bio: 'We\'re from Iceland!  Oh yeah!  I have an amazing voice, you can listen to us and it will be outstanding I guarantee it.  Also i love to play a guitar with a violin bow',
    name: 'Sigur Ros',
    city: 'Reykjavik',
    genres: ['Experimental, ', 'Rock, ', 'Ambient']
  }
  ];

  $scope.venues = [
  {
    picture: 'assets/images/mhow2.jpg',
    bio: 'We are an awesome music venue in Williamsburg, Brooklyn',
    name: 'Music Hall of Williamsburg',
    city: 'Brooklyn',
    capacity: 1000
  },
  {
    picture: 'assets/images/fillmore.jpg',
    bio: 'We are such a famous venue and do lots of sweet shows etc. yeah and stuff',
    name: 'Fillmore East',
    city: 'San Francisco',
    capacity: 3000
  },
  {
    picture: 'assets/images/echo.jpeg',
    bio: 'The home of all the best shows and stuff in Los Angeles',
    name: 'Echoplex',
    city: 'Los Angeles',
    capacity: 1500
  }
  ];



}]);