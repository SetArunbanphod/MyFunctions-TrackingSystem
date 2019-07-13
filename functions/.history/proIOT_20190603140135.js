const functions = require('firebase-functions');
const admin = require("firebase-admin");
const request = require('request')
admin.initializeApp();

var getDataIm = null;
exports.getData = functions.database
.ref('Data/start')
.onUpdate((change, context)=>{
    if(snapshot.val().status === false){
        clearInterval(prevNowPlaying);
    }else{
        prevNowPlaying = setInterval(function () {
            $('#cancion').load('sonando.php?emisora=' + station);
        }, 5000);
    }   
    return admin.database().ref('nodemcu/'+ nodeId).update();
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






