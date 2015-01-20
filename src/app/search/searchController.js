'use strict';

angular.module('mvp.search', [])
.controller('SearchController', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

  $scope.inbox = true;

  $scope.goInbox = function() {
    $scope.inbox = !$scope.inbox;
  };  

  $scope.respond = function() {
    $state.go('admin.band.message');
  };

  $scope.reset = function() {
    $state.go('admin.band');
  };

  $scope.messages = [
    {
      title: 'Hey BOH, just reaching out...',
      text: 'Was hoping you were available on January 27th for a gig.  Get back to me when you get a chance!\n Thanks, \n Bruno - Music Hall Of Williamsburg',
      sentAt: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
      title: 'Come play at the Echoplex!',
      text: 'Shoreditch Kickstarter freegan, fingerstache blog tote bag whatever semiotics DIY lo-fi. Shabby chic locavore jean shorts, paleo fingerstache actually Kickstarter occupy chia slow-carb. Schlitz jean shorts ennui cornhole, ugh fap twee whatever shabby chic Williamsburg Wes Anderson umami selfies. Brunch ennui church-key, Blue Bottle artisan four dollar toast typewriter hoodie. Wolf squid locavore, next level kitsch tote bag kale chips 3 wolf moon +1 small batch. Narwhal Banksy Shoreditch, migas cred pork belly butcher. Selfies art party Banksy, Odd Future Brooklyn vinyl Thundercats mlkshk.',
      sentAt: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
      title: 'Sup dudes',
      text: 'Pug wolf bespoke, roof party retro artisan biodiesel tousled keffiyeh chambray occupy Neutra drinking vinegar. Beard Schlitz biodiesel meditation Blue Bottle. Single-origin coffee tilde semiotics fashion axe. Banksy cold-pressed scenester swag. Aesthetic vegan Williamsburg, occupy hashtag Brooklyn 90\'s bicycle rights pug chillwave Echo Park. 3 wolf moon dreamcatcher Schlitz twee kitsch wayfarers PBR. Deep v raw denim pork belly squid.',
      sentAt: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  ];

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
    name: 'Music Hall Of Williamsburg',
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