#!/usr/bin/env node
var lockFile = require('lockfile')

lockFile.unlock('../../../data/resin-updates.lock', function(err) {
	if (err != null) {
	  throw err;
	} else {
		console.log("Update-lock off!")
	}
});