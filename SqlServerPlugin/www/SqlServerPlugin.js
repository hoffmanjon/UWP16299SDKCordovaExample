var exec = require('cordova/exec');

function SqlServer () {}

SqlServer.supported = function (arg0, success, error) {
  exec(success, error, 'SqlServerPlugin', 'supported', [arg0])
}

SqlServer.testConnection = function (arg0, success, error) {
  exec(success, error, 'SqlServerPlugin', 'testConnection', [arg0])
}

module.exports = SqlServer
