/* eslint-disable indent, eqeqeq */
var cordova = require('cordova')

cordova.commandProxy.add('SqlServerPlugin', {
  supported: function (successCallback, errorCallback, args) {
    supported(successCallback, errorCallback, args)
  },
  testConnection: function (successCallback, errorCallback, args) {
    testConnection(successCallback, errorCallback, args)
  }
})

var supported = function (successCallback, errorCallback, args) {
  var retstr = 'empty'
  if (args.length > 0) {
      retstr = args[0]
  }

  successCallback(retstr + ': ' + true)
}

var testConnection = function (successCallback, errorCallback, args) {
  var res = SqlComponent.DatabaseConnection.testFunction()
  if (res != undefined) {
    successCallback(res)
  } else {
    errorCallback('No element')
  }
}
