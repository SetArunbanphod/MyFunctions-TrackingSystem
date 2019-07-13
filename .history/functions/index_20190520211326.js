const functions = require('firebase-functions');
var admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.setData = functions.database
.ref('logs/{nodeId}/{id}')
.onCreate((snapshot,context)=>{
    const nodeId = context.params.nodeId;
    const data = {
        temperature: snapshot.val().temperature,
        humidity: snapshot.val().humidity,
        battery: snapshot.val().battery,
        battery: snapshot.val().battery,
    }
    return admin.database
    .ref('nodemcu/'+ nodeId)
})


