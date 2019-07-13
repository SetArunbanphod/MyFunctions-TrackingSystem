const functions = require('firebase-functions');
const admin = require("firebase-admin");
const request = require('request')
admin.initializeApp();

var getDataInterval = null;
const part = "";
exports.getData = functions.database
.ref('Data/start')
.onUpdate((change, context)=>{
    if(snapshot.val().status === false){
        clearInterval(getDataInterval);
    }else{
        getDataInterval = setInterval(function () {
            request(part,function(err,res,body){
                if(err){
                    
                }
                else{
                    var data = JSON.parse(body);
                    var objData = {};
                    updatePhoto[`/photos/${photoKey}/likes`] = 1
                    updatePhoto[`/userPhotos/${userId}/${photoKey}/likes`] = 1
                    return admin.database().ref('Data/'+ nodeId).update();
                }
            })
        }, 5000);
    }   
   
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






