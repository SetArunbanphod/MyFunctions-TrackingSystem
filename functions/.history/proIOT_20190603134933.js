const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.setNotify = functions.database
.ref('Data/start')
.onUpdate((change, context)=>{
    if(snapshot.val().statsu === 
   
    return admin.database().ref('nodemcu/'+ nodeId).update({countNotify: countNotify,notify: notify, checkStatus: Date.now(),bStatus:bStatus});
})




