'use strict';

angular.module('mvp.all', ['ui.calendar', 'ui.bootstrap'])
.controller('AllController', ['$scope', '$rootScope', '$state', '$stateParams', '$window', 'Auth', '$filter', '$compile', 'uiCalendarConfig', function ($scope, $rootScope, $state, $stateParams, $window, Auth, $filter, $compile, uiCalendarConfig) {

  $scope.inbox = true;
  $scope.message = false;

  $scope.goInbox = function() {
    $scope.inbox = !$scope.inbox;
  };  

  $scope.respond = function() {
    console.log('respond clicked');
    $scope.message = !$scope.message;
    $state.go('admin.band.message');
  };

  $scope.bandName = $stateParams.bandname;
  $scope.venueName = $stateParams.venuename;

  $scope.reset = function() {
    $state.go('admin.band');
  };

  $scope.messageLand = function() {
    $state.go('messageLand');
  };

  $rootScope.messages = [
    {
      title: 'Hey, just reaching out...',
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

  /////bandcontroller////////

  // $scope.uiConfig = {
  //     calendar:{
  //       height: 450,
  //       editable: true,
  //       header:{
  //         left: '',
  //         center: 'title',
  //         right: 'prev,next'
  //       },
  //       dayClick: $scope.alertEventOnClick,
  //       eventDrop: $scope.alertOnDrop,
  //       eventResize: $scope.alertOnResize
  //     }
  //   };


    ////////user controller/////////


  $scope.user = {};

  $scope.chosen = true;
  $scope.goBand = function() {
    $scope.chosen = false;
  };

  $scope.bandin = false;
  $scope.venuein = false;

  $scope.goVenue = function() {
    $scope.chosen = false;
  };

  $scope.bandsignup = function () {
    // console.dir($scope.user);
    // console.log('signing up');
    console.log('signing up!');
    $scope.bandin = true;
    
    Auth.signupBand($scope.user)
      .then(function (token) {
        console.log('made it to the promise land');
        $window.localStorage.setItem('com.mvp', token);
        $state.go('admin.band');
      })
      .catch(function (error) {
        console.error(error);
      });


    var newUser = $scope.user.bandname;
    $rootScope[newUser] = {newUser: newUser};
    $rootScope[newUser].days = [];
    console.log($rootScope[newUser]);

    bandsRef.push($scope.user);
    // var state = 'admin.' + $scope.user.bandname;
    // console.log(state);
    // $state.go('admin.band');
  };

  $scope.venuesignup = function () {
    // console.dir($scope.user);
    // console.log('signing up');
    // Auth.signupBand($scope.user)
    //   .then(function (token) {
    //     console.log('made it to the promise land');
    //     $window.localStorage.setItem('com.mvp', token);
    //     $state.go('admin.band');
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    console.log('signing up!');

    $scope.venuein = true;

    var newUser = $scope.user.venuename;
    $rootScope[newUser] = {newUser: newUser};
    $rootScope[newUser].days = [];
    console.log($rootScope[newUser]);

    venuesRef.push($scope.user);
    // var state = 'admin.' + $scope.user.bandname;
    // console.log(state);
    // $state.go('admin.band');
  };

  $scope.bandlogin = function (user) {
    // console.dir($scope.user);
    // console.log('signing up');
    // Auth.signupBand($scope.user)
    //   .then(function (token) {
    //     console.log('made it to the promise land');
    //     $window.localStorage.setItem('com.mvp', token);
    //     $state.go('admin.band');
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    console.log('login clicked');

    var result = bandsRef.orderByKey();

    console.log(result);
    
  };

  $scope.venuelogin = function (user) {
    // console.dir($scope.user);
    // console.log('signing up');
    // Auth.signupBand($scope.user)
    //   .then(function (token) {
    //     console.log('made it to the promise land');
    //     $window.localStorage.setItem('com.mvp', token);
    //     $state.go('admin.band');
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    console.log('login clicked');

    var result = venuesRef.orderByKey();

    console.log(result);
    
  };


  //////////////nav controller///////////
  $scope.date = new Date();

  $scope.resetSignup = function () {
    console.log('reset');
  };

  /////////messageland/////////
  $scope.messagelandtitle = '';
  $scope.messagelandtext = '';
  $scope.messageland = false;

  $scope.messagelandinit = function() {
    $scope.messageland = true;    
  };

  $scope.messagelandsend = function() {
    console.log('message land send');
    $rootScope.messages.push({
      title: $scope.messagelandtitle,
      text: $scope.messagelandtext,
      sentAt: moment().format('MMMM Do YYYY, h:mm:ss a')
    });
    console.log('stateParams', $stateParams);
    console.log('state', $state);
    $window.history.back();
  };

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  /* event source that pulls from google.com */
  $scope.eventSource = {
    url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
    className: 'gcal-event',           // an option!
    currentTimezone: 'America/Chicago' // an option!
  };
  /* event source that contains custom events on the scope */
  $scope.events = [
    {title: 'All Day Event',start: new Date(y, m, 1)},
    {title: 'Band Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
    {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
    {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
    {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
  ];
  /* event source that calls a function on every view switch */
  $scope.eventsF = function (start, end, timezone, callback) {
    var s = new Date(start).getTime() / 1000;
    var e = new Date(end).getTime() / 1000;
    var m = new Date(start).getMonth();
    var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
    callback(events);
  };

  $scope.calEventsExt = {
     color: '#f00',
     textColor: 'yellow',
     events: [ 
        {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
        {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
        {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
      ]
  };
  $scope.alertOnDayClick = function( date, jsEvent, view){
    console.log('day clicked');
  };
  /* alert on eventClick */
  $scope.alertOnEventClick = function( date, jsEvent, view){
    $scope.alertMessage = (date.title + ' was clicked ');
  };
  /* alert on Drop */
   $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
     $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
  };
  /* alert on Resize */
  $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
     $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
  };
  /* add and removes an event source of choice */
  $scope.addRemoveEventSource = function(sources,source) {
    var canAdd = 0;
    angular.forEach(sources,function(value, key){
      if(sources[key] === source){
        sources.splice(key,1);
        canAdd = 1;
      }
    });
    if(canAdd === 0){
      sources.push(source);
    }
  };
  /* add custom event*/
  $scope.addEvent = function() {
    $scope.events.push({
      title: 'Open Sesame',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      className: ['openSesame']
    });
  };
  /* remove event */
  $scope.remove = function(index) {
    $scope.events.splice(index,1);
  };
  /* Change View */
  $scope.changeView = function(view,calendar) {
    uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
  };
  /* Change View */
  $scope.renderCalender = function(calendar) {
    if(uiCalendarConfig.calendars[calendar]){
      uiCalendarConfig.calendars[calendar].fullCalendar('render');
    }
  };
   /* Render Tooltip */
  $scope.eventRender = function( event, element, view ) { 
      element.attr({'tooltip': event.title,
                   'tooltip-append-to-body': true});
      $compile(element)($scope);
  };
  /* config object */
  $scope.uiConfig = {
    calendar:{
      height: 650,
      editable: true,
      header:{
        left: 'title',
        center: '',
        right: 'today prev,next'
      },
      dayClick: $scope.alertOnDayClick,
      eventClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
    }
  };

  /* event sources array*/
  $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
  $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

/* EOF */

















}])
.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    // console.log('toState: ', toState)
    // console.log('fromState: ', fromState)
    console.dir('toState', toState);
      console.dir('fromState', fromState);
      console.dir('toParams', toParams);
      console.dir('fromParams', fromParams);
      console.dir(event);
    if ((fromState.url === '/band' || fromState.url === '/venue') && toState.url === '/signup'){
      // $state.go('signup');
      console.dir(fromState);
    }
    // if (toState.url === '/messageLand') {
      
    // }

    // if (toState.needsAuthentication && !Auth.isAuth()) { 
    //   event.preventDefault();
    //   // console.log($state);
    //   // $location.path('/signin');
    //   // $state.go('signin');
    //   $state.go('signin');
    // }
  });
});