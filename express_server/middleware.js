var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser'),
    helpers     = require('./helpers.js'); // our custom middleware
var userController = require('./userController.js');


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  var userRouter = express.Router();
  var linkRouter = express.Router();
  
  // inject our routers into their respective route files
  require('../users/userRoutes.js')(userRouter);
  require('../links/linkRoutes.js')(linkRouter);

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../src'));


  app.use('/signup/*', userRouter); // use user router for all user request
  // app.post('/signup/band', userController.signupBand);
  app.use('/login/*', userRouter);

  // authentication middleware used to decode token and made available on the request
  //app.use('/api/links', helpers.decode);
  app.use('/api/links', linkRouter); // user link router for link request
  app.get('/*', linkRouter); // user link router for link request
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

};
