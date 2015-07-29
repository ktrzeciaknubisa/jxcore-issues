// Copyright & License details are available under JXCORE_LICENSE file

var CronJob = require('cron').CronJob;

var DynamicUpdatesJob = new CronJob('* * * * * *', function () {
    console.log('You will see this message every second');
  }, function () {
    console.log('job stopped');
  },
  true
);