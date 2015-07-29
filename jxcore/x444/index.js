// Copyright & License details are available under JXCORE_LICENSE file

var CronJob = require('cron').CronJob;

var DynamicUpdatesJob = new CronJob('00 */2 * * * *', function () {
    console.log('You will see this message every second');
    process.exit();
  }, function () {
    console.log('job stopped');
  },
  true
);


//setTimeout(process.exit, 5000);