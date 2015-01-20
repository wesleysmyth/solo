var userController = require('./userController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  app.post('/login/band', userController.loginBand);
  app.post('/login/venue', userController.loginVenue);
  app.post('/signup/band', userController.signupBand);
  app.post('/signup/venue', userController.signupVenue);
  app.get('/signedin', userController.checkAuth);
};
