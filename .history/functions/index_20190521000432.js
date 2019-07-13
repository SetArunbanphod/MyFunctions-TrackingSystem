const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.setNotify = functions.database
.ref('nodemcu/{nodeId}/timestamp')
.onUpdate((change, context)=>{
    var nodeId = context.params.nodeId;
    admin.database().ref('nodemcu/' + nodeId).once('value').then(function(snapshot){
        console.log(snapshot.val());
        var countNotify = snapshot.val().countNotify || 0;
        if(snapshot.val().temperature > snapshot.val().hightLevel || snapshot.val().temperature < snapshot.val().lowLevel){
            countNotify = countNotify + 1;
            if(countNotify > 3){
                countNotify = 0;
                var notifyMessage = {
                    notifyCar: snapshot.val(),
                    notifyNodeId: snapshot.val(),
                    notifyTemp:snapshot.val(),
                    notifyTime: snapshot.val()
                }
            }
        }else{
            countNotify = countNotify - 1;
        }
        return admin.database().ref('nodemcu/'+ nodeId).update({countNotify: countNotify});
    })
})




