const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.setData = functions.database
.ref('logs/{nodeId}/{id}')
.onCreate((snapshot,context)=>{
    var nodeId = context.params.nodeId;
    var data = {
        temperature: snapshot.val().temperature,
        humidity: snapshot.val().humidity,
        battery: snapshot.val().battery,
        timestamp: snapshot.val().timestamp,
    }
    return admin.database().ref('nodemcu/'+ nodeId).update(data);
})

exports.setNotify = functions.database()
.ref('nodemcu/{nodeId}/temperature')
.onUpdate((change, context)=>{
    var nodeId = context.params.nodeId;
    admin.database().ref('nodemcu/' + nodeId).once('value').then(function(snapshot){
        console.log('My snapshot data : ',snapshot.);
    })
    return 'Success';
})


