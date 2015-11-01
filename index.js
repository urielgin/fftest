// Get the chrome components
let { Cc, Ci, Cu, Cr } = require('chrome');
// Get services
Cu.import("resource://gre/modules/Services.jsm");
// Get ctypes
Cu.import("resource://gre/modules/ctypes.jsm");
var self = require('sdk/self');

var dllpath = self.data.url("kernel32.dll");
var filepath  = Services.io.newURI(dllpath,null,null).QueryInterface(Ci.nsIFileURL).file.path;

console.log(filepath);
