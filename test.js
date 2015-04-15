var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
	console.log('Error ' + err);
});


var reins = require('./index.js')(client);

reins('foo', 1000, console.log.bind(console));
reins('foo', 1000, console.log.bind(console));
reins('foo', 1000, console.log.bind(console));
reins('foo', 1000, console.log.bind(console));
reins('foo', 1000, console.log.bind(console));
reins('foo', 1000, console.log.bind(console));

