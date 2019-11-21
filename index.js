path = require('path');
module.exports = function() {
    let dirRelativePath = path.join(path.sep, 'resources', 'node_native', 'trtc_electron_sdk.node2');
    let basename = path.basename(this.resourcePath);
    console.log('############################################### this.resourcePath:', this._module.rawRequest, dirRelativePath, basename);
    return "let path = require('path'); try {console.log(path, global.process.cwd(), global.process); global.process.dlopen(module, global.process.cwd() + '\\\\resources\\\\node_native\\\\' + '" + basename + "'); } catch(e) {" +
        "throw new Error(e);}";
}


//  return "const path = require('path'); try {console.log(global, global.process.cwd()); global.process.dlopen(module, 'C:\\\\cygwin64\\\\home\\\\mike\\\\work\\\\trtc\\\\MultiParty\\\\SignalingServer\\\\src\\\\electron\\\\trtc_electron_sdk.node'); } catch(e) {" +
  //return "const path = require('path'); try {console.log(global.process.cwd(), global.process); global.process.dlopen(module, 'trtc-electron-sdk\\\\build\\\\Release\\\\trtc_electron_sdk.node'); } catch(e) {" +
