const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.setNotify = functions.database
.ref('nodemcu/{nodeId}/timestamp')
.onUpdate((change, context)=>{
    var nodeId = context.params.nodeId;
    admin.database().ref('nodemcu/' + nodeId).once('value').then(function(snapshot){
        if()

        var countNotify = snapshot.val().countNotify || 0;
        if(snapshot.val().temperature > snapshot.val().hightLevel || snapshot.val().temperature < snapshot.val().lowLevel){
            countNotify = countNotify + 1;
            if(countNotify > 3){
                countNotify = 0;
                var notifyMessage = {
                    notifyHight: snapshot.val().hightLevel,
                    notifyLow: snapshot.val().lowLevel,
                    notifyCar: snapshot.val().car_id,
                    notifyNodeId: snapshot.val().nodeId,
                    notifyTemp:snapshot.val().temperature,
                    notifyTime: snapshot.val().timestamp
                }
            }
        }else{
            countNotify = countNotify - 1;
        }
        return admin.database().ref('nodemcu/'+ nodeId).update({countNotify: countNotify});
    })
})




