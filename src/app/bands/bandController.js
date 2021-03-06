'use strict';

angular.module('mvp.band', [])
.controller('BandController', ['$scope', '$rootScope', '$filter', '$compile', 'uiCalendarConfig', function ($scope, $rootScope, $filter, $compile, uiCalendarConfig) {

  // $scope.eventSources = [
  //   {
  //     title: 'Event1',
  //     start: '2015-01-27'
  //   },
  //   {
  //     title: 'Event2',
  //     start: '2015-01-01'
  //   }
  // ];


  // $element('.fc-day').on('click', function(){
  //     this.count = this.count ? this.count : 0;
  //     if (this.count % 2 === 0) {
  //       $element(this).css('background-color', 'green');
  //       $element(this).css('text-align', 'center');
  //       var text = 'Available';
  //       $element(this)[0].childNodes[0].childNodes[1].childNodes[0].innerText = text;
  //     } else {
  //       $element(this).css('background-color', 'indianred');
  //       $element(this).css('text-align', 'center');
  //       var text = '';
  //       $element(this)[0].childNodes[0].childNodes[1].childNodes[0].innerText = text;
  //     }
  //     $element(this.count++);
  //   });

  $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: '',
          center: 'title',
          right: 'prev,next'
        },
        // dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };



    


    // $scope.bands = [
    //   {
    //     picture: 'assets/images/BOH.jpg',
    //     bio: 'We are an amazing band of people who sing about things.  All of the things.  There are horses and such and more and more and more and more and stuff as well as other things.',
    //     name: 'Band Of Horses',
    //     city: 'San Francisco',
    //     genres: ['Folk, ', 'Rock, ', 'Indie']
    //   },
    //   {
    //     picture: 'assets/images/theband.jpg',
    //     bio: 'We\'re the band, we\'re the best band.  Etc. La la la la la.  Used to play for Dylan.  LEVON FOR LIFE.  Oh yeah listen to our stuff!',
    //     name: 'The Band',
    //     city: 'New York',
    //     genres: ['Rock, ', 'Folk, ', 'Classic Rock']
    //   },
    //   {
    //     picture: 'assets/images/sigur.jpg',
    //     bio: 'We\'re from Iceland!  Oh yeah!  I have an amazing voice, you can listen to us and it will be outstanding I guarantee it.  Also i love to play a guitar with a violin bow',
    //     name: 'Sigur Ros',
    //     city: 'Reykjavik',
    //     genres: ['Experimental, ', 'Rock, ', 'Ambient']
    //   }
    // ];

    // /* config object */
    // $scope.uiConfig = {
    //   calendar:{
    //     height: 450,
    //     editable: true,
    //     header:{
    //       left: '',
    //       center: 'title',
    //       right: 'prev,next'
    //     }
    //   }
    //     // eventClick: $scope.alertOnEventClick,
    //     // eventDrop: $scope.alertOnDrop,
    //     // eventResize: $scope.alertOnResize,
    //     // eventRender: $scope.eventRender
    // };

    // $scope.dayClick = function() {
    //   console.log('day clicked');
    // };

    // /* event sources array*/
    // $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    // $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];



    // var date = new Date();
    // var d = date.getDate();
    // var m = date.getMonth();
    // var y = date.getFullYear();
    
    // /* event source that pulls from google.com */
    // $scope.eventSource = {
    //         url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
    //         className: 'gcal-event',           // an option!
    //         currentTimezone: 'America/Chicago' // an option!
    // };
    // /* event source that contains custom events on the scope */
    // $scope.events = [
    //   {title: 'All Day Event',start: new Date(y, m, 1)},
    //   {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    //   {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
    //   {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
    //   {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
    //   {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    // ];
    // /* event source that calls a function on every view switch */
    // $scope.eventsF = function (start, end, timezone, callback) {
    //   var s = new Date(start).getTime() / 1000;
    //   var e = new Date(end).getTime() / 1000;
    //   var m = new Date(start).getMonth();
    //   var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
    //   callback(events);
    // };

    // $scope.calEventsExt = {
    //    color: '#f00',
    //    textColor: 'yellow',
    //    events: [ 
    //       {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
    //       {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
    //       {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    //     ]
    // };
    // /* alert on eventClick */
    // $scope.alertOnEventClick = function( date, jsEvent, view){
    //     $scope.alertMessage = (date.title + ' was clicked ');
    // };
    // /* alert on Drop */
    //  $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
    //    $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    // };
    // /* alert on Resize */
    // $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
    //    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    // };
    // /* add and removes an event source of choice */
    // $scope.addRemoveEventSource = function(sources,source) {
    //   var canAdd = 0;
    //   angular.forEach(sources,function(value, key){
    //     if(sources[key] === source){
    //       sources.splice(key,1);
    //       canAdd = 1;
    //     }
    //   });
    //   if(canAdd === 0){
    //     sources.push(source);
    //   }
    // };
    // /* add custom event*/
    // $scope.addEvent = function() {
    //   $scope.events.push({
    //     title: 'Open Sesame',
    //     start: new Date(y, m, 28),
    //     end: new Date(y, m, 29),
    //     className: ['openSesame']
    //   });
    // };
    // /* remove event */
    // $scope.remove = function(index) {
    //   $scope.events.splice(index,1);
    // };
    // /* Change View */
    // $scope.changeView = function(view,calendar) {
    //   uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    // };
    // /* Change View */
    // $scope.renderCalender = function(calendar) {
    //   if(uiCalendarConfig.calendars[calendar]){
    //     uiCalendarConfig.calendars[calendar].fullCalendar('render');
    //   }
    // };
    //  /* Render Tooltip */
    // $scope.eventRender = function( event, element, view ) { 
    //     element.attr({'tooltip': event.title,
    //                  'tooltip-append-to-body': true});
    //     $compile(element)($scope);
    // };



}]);