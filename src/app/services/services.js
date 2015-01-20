'use strict';
angular.module('mvp.services', [])

.factory('Auth', function ($state, $http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.mvp'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signinBand = function (band) {
    return $http({
      method: 'POST',
      url: '/login/band',
      data: band
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signinVenue = function (venue) {
    return $http({
      method: 'POST',
      url: '/login/venue',
      headers: {
       'Content-Type': 'text/html'
      },
      data: venue
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signupBand = function (band) {
    return $http({
      method: 'POST',
      url: '/signup/band',
      data: band
    })
    .then(function (resp) {
      console.log('got response in signupBand in services.js');
      return resp.data.token;
    });
    // $http.post('/signup/band', band).
    // success(function(data, status, headers, config) {
    //   // this callback will be called asynchronously
    //   // when the response is available
    //   console.log('data', data);
    //   console.log('config', config);
    //   console.log('status', status);
    //   console.log('headers', headers);
    // }).
    // error(function(data, status, headers, config) {
    //   // called asynchronously if an error occurs
    //   // or server returns response with an error status.
    // });

  };

  var signupVenue = function (venue) {
    return $http({
      method: 'POST',
      url: '/signup/venue',
      data: venue
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.mvp');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.mvp');
    $state.go('home');
  };


  return {
    signinBand: signinBand,
    signinVenue: signinVenue,
    signupBand: signupBand,
    signupVenue: signupVenue,
    isAuth: isAuth,
    signout: signout
  };
});
