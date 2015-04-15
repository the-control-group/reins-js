var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
	console.log('Error ' + err);
});


var rein = require('./index.js')(client);

rein('foo', 1000, console.log.bind(console));
rein('foo', 1000, console.log.bind(console));
rein('foo', 1000, console.log.bind(console));
rein('foo', 1000, console.log.bind(console));
rein('foo', 1000, console.log.bind(console));
rein('foo', 1000, console.log.bind(console));

