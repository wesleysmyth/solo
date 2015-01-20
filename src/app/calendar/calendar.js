'use strict';
angular.module('mvp.calendar', ['ui.calendar'])
.controller('CalendarController', ['$scope', '$rootScope', '$filter', '$compile', 'uiCalendarConfig', function ($scope, $rootScope, $filter, $compile, uiCalendarConfig) {

    // $scope.toggleDays = function(){
    //   console.log('working');
    //   $('.fc-day').on('click', function(){
    //     this.count = this.count ? this.count : 0;
    //     if (this.count % 2 === 0) {
    //       $(this).css('background-color', 'green');
    //       $(this).css('text-align', 'center');
    //       var text = 'Available';
    //       $(this)[0].childNodes[0].childNodes[1].childNodes[0].innerText = text;
    //     } else {
    //       $(this).css('background-color', 'indianred');
    //       $(this).css('text-align', 'center');
    //       var text = '';
    //       $(this)[0].childNodes[0].childNodes[1].childNodes[0].innerText = text;
    //     }
    //     $(this.count++);
    //   });
    // };

    // $scope.toggleDays();



}]);

