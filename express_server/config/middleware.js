var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser'),
    helpers     = require('./helpers.js'); // our custom middleware
var userController = require('../users/userController.js');

var express     = require('express'),
    mongoose    = require('mongoose');


var app = express();

mongoose.connect('mongodb://localhost/mvp'); // connect to mongo database named mvp

// configure our server with all the middleware and and routing
// require('middleware.js')(app, express);


var connect = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  var userRouter = express.Router();
  var linkRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../src'));


  // app.use('/signup/*', userRouter); // use user router for all user request
  app.post('/signup/band', function(data) {
    console.log(data);
    userController.signupBand();
  });
  // app.use('/login/*', userRouter);

  // authentication middleware used to decode token and made available on the request
  //app.use('/api/links', helpers.decode);
  // app.use('/api/links', linkRouter); // user link router for link request
  // app.get('/*', linkRouter); // user link router for link request
  // app.use(helpers.errorLogger);
  // app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  require('../users/userRoutes.js')(userRouter);
  require('../links/linkRoutes.js')(linkRouter);
};

connect(app, express);


// export our app for testing and flexibility, required by index.js
module.exports = app;
