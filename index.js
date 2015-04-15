'use strict';

var fs = require('fs');
var script = fs.readFileSync('index.lua');

module.exports = function(client) {

	function rein(id, interval, callback) {

		// put the interval in µs
		interval = interval * 1000;

		// because js doesn't record microtime, add randomness to
		// help distinguish between seemingly simultaneous requests
		var since = Math.floor((Date.now() + Math.random()) * 1000) - interval;
		var key = id + '::' + interval;

		this.client.eval(script, 1, key, since, interval, callback);
	}

	rein.client = client;

	return rein.bind(rein);

}
