const functions = require('firebase-functions');
var admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.setData = functions.database
.ref('logs/{nodeId}/{id}')
.onCreate((snapsho))


