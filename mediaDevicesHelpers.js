const MediaDevicesHelpers = {
  devicesTypes: ['videoinput', 'audioinput', 'audiooutput'],

  catchStream: function(constraints) {
    return new Promise(function(resolve, reject) {
      if(!this.validateMediaConstraints(constraints)){
        reject(new Error('Invalid media constraints'));
      }
      try{
        resolve(navigator.mediaDevices.getUserMedia(constraints));
      } catch(error){
        reject(error)
      }
    });
  },

  validateMediaConstraints: function(constraints) {
    return true;
  },
  
  connectedDeviceList: function(type = null) {
    return new Promise(function(resolve, reject) { 
      if(!type)
        resolve(navigator.mediaDevices.enumerateDevices());
      else if (!this.devicesTypes.includes(type))
        reject(new Error('Invalid device type'));
      navigator.mediaDevices.enumerateDevices()
        .then(devicesList => {
          resolve(devicesList.filter(device => device.kind === type));
        })
        .catch(error => reject(error));      
    }.bind(this));
  }
}

module.exports = MediaDevicesHelpers;