var BrotherPrinter = function () {}
BrotherPrinter.prototype = {
    findNetworkPrinters: function (onSuccess, onFailure) {
        cordova.exec(onSuccess, onFailure, 'BrotherPrinter', 'findNetworkPrinters', [])
    },
    printViaSDK: function (data, callback) {
        if (!data || !data.length) {
            console.log('No data passed in. Expects a bitmap.')
            return
        }
        cordova.exec(callback, function(err){console.log('error: '+err)}, 'BrotherPrinter', 'printViaSDK', [data])
    },
    sendUSBConfig: function (data, callback) {
        if (!data || !data.length) {
            console.log('No data passed in. Expects print payload string.')
            return
        }
        cordova.exec(callback, function(err){console.log('error: '+err)}, 'BrotherPrinter', 'sendUSBConfig', [data])
    },
    printTemplate: function (data, callback) {
        if (!data || !Object.keys(data).length) {
            console.log('No data passed in. Expects templates')
            return
        }
        cordova.exec(callback, function(err){console.log('error: '+err)}, 'BrotherPrinter', 'printTemplate', [data])
    }
}
var plugin = new BrotherPrinter()
module.exports = plugin
