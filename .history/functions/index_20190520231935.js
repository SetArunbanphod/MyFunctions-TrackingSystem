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

exports.setNotify = functions.database
.ref('nodemcu/{nodeId}/timestamp')
.onUpdate((change, context)=>{
    var nodeId = context.params.nodeId;
    admin.database().ref('nodemcu/' + nodeId).once('value').then(function(snapshot){
        var countNotify = snapshot.val().countNotify || 0;
        if(snapshot.val().temperature > snapshot.val().hightLevel || snapshot.val().temperature < snapshot.val().lowLevel){
            countNotify += 1;
        }else{
            countNotify -= 1;
        }
        return admin.database().ref('nodemcu/'+ nodeId).update(data);
    })
})


