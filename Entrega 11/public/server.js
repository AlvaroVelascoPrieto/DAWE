var session = require('express-session');
var admin = require("firebase-admin");

var serviceAccount = require("dawe-key.json");

admin.initializeApp({
  //credential: admin.credential.cert(serviceAccount)
  credential: admin.credential.applicationDefault()
});

