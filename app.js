var moment = require('moment');
var fs = require('fs')
var Alpine = require('alpine');
var argv = require('boring')();
var alpine = new Alpine();
var lastWhen;
var outageInterval = (argv.seconds || 60) * 1000;

alpine.parseReadStream(process.stdin,
  function(data) {
    var when = moment(data.time, 'DD/MMM/YYYY:HH:mm:ss').toDate();
    if (lastWhen) {
      if (when.getTime() - lastWhen.getTime() > outageInterval) {
        console.log("Down from " + lastWhen + " to " + when);
      }
    }
    lastWhen = when;
  }
);
