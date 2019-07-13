const functions = require('firebase-functions');
const admin = require("firebase-admin");
const request = require('request')
admin.initializeApp();

exports.setNotify = functions.database
.ref('Data/start')
.onUpdate((change, context)=>{
    if(snapshot.val().status === true){
        request.
        return admin.database().ref('nodemcu/'+ nodeId).update({countNotify: countNotify,notify: notify, checkStatus: Date.now(),bStatus:bStatus});
    }
   
    return admin.database().ref('nodemcu/'+ nodeId).update({countNotify: countNotify,notify: notify, checkStatus: Date.now(),bStatus:bStatus});
})

function getData() {
    if(prevNowPlaying) {
        clearInterval(prevNowPlaying);
    }
    $('#cancion').children().remove();
    $('#cancion').load('sonando.php?emisora=' + station);
    return = setInterval(function () {
        $('#cancion').load('sonando.php?emisora=' + station);
    }, 5000);
}






