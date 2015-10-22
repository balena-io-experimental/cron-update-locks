#!/usr/bin/env node
var lockFile = require('lockfile')

lockFile.lock('resin-updates.lock', function(err) {
  if (err != null) {
    throw new Error('Could not acquire lock: ', err);
  } else {
  	console.log("Update-lock on!")
  }
});