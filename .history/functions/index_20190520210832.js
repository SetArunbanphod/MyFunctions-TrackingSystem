const functions = require('firebase-functions');
var admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.setData = functions.database
.ref('logs/{nodeId}/{id}')
.onCreate((snapshot,context)=>{
    const nodeId = context.params.nodeId;
    const data = {
        temperature: snapshot.val().temperature,
        humidity: s
    }
    return admin.database.ref()
})


