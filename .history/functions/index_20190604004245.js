const functions = require('firebase-functions');
const admin = require("firebase-admin");


admin.initializeApp();

exports.setNotify = functions.database
.ref('nodemcu/{nodeId}/timestamp')
.onUpdate((change, context)=>{
    var nodeId = context.params.nodeId;
    admin.database().ref('nodemcu/' + nodeId).once('value').then(function(snapshot){
        //console.log(snapshot.val());
        if(snapshot.val().hightLevel == null || snapshot.val().lowLevel == null) {
            return null;
        }
        var countNotify = snapshot.val().countNotify || 0;
        var notify = false;

        var bStatus = false;
        if(snapshot.val().battery > 25){
            bStatus = true;
        }

        if(snapshot.val().temperature > snapshot.val().hightLevel || snapshot.val().temperature < snapshot.val().lowLevel){
            countNotify = countNotify + 1;
            if(countNotify > 3){
                countNotify = 0;
                notify = true;
                var notifyMessage = {
                    notifyHight: snapshot.val().hightLevel,
                    notifyLow: snapshot.val().lowLevel,
                    notifyCar: snapshot.val().car_id,
                    notifyNodeId: snapshot.val().nodeId,
                    notifyTemp:snapshot.val().temperature,
                    notifyTime: snapshot.val().timestamp
                }
                admin.database().ref('notification/'+ snapshot.val().userId).push(notifyMessage);
            }
        }else{
            countNotify = countNotify - 1;
            if(countNotify < 0) countNotify = 0;
        }

        if(snapshot.val().checkStatus != undefined){
            if(Date.now()-snapshot.val())

        }

        return admin.database().ref('nodemcu/'+ nodeId).update({countNotify: countNotify,notify: notify, checkStatus: Date.now(),bStatus:bStatus});
    })
})







