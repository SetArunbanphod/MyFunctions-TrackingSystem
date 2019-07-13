const functions = require('firebase-functions');
const admin = require("firebase-admin");
const request = require('request')
admin.initializeApp();

var getDataInterval = null;
const part = "";
exports.getData = functions.database
.ref('Data/start')
.onUpdate((change, context)=>{
    if(change.val().status === false){
        clearInterval(getDataInterval);
    }else{
        getDataInterval = setInterval(function () {
            request(part,function(err,res,body){
                if(err){
                    
                }
                else{
                    var data = JSON.parse(body);
                    var objData = {};
                    var timestamp = new Date();
                    objData['/DHT22/Temperature'] = data.
                    objData['/DHT22/Timestamp'] = timestamp
                    objData['/SOIL/Humidity'] = data.
                    objData['/SOIL/Timestamp'] = timestamp
                    return admin.database().ref('Data/'+ nodeId).update(objData);
                }
            })
        }, 5000);
    }   
   
})







