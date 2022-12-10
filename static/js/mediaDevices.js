import MediaDevicesHelpers from "../../mediaDevicesHelpers.js";

MediaDevicesHelpers.connectedDeviceList()
  .then(function(mediaDevicesList){
    console.log(mediaDevicesList)
  })
  .catch(function(err){
    console.error(err);
  })