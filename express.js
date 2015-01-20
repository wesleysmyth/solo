var app = require('./express_server/config/middleware.js');
var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://mvp.firebaseio.com/");

app.listen(8000);
