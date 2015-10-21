# /proc/1/fd/1 is systemd's stdout, and therefore appears in the resin logs.

# run unlock at 00:00 everyday 
0 0 * * * /usr/local/bin/node /usr/src/app/unlock.js > /proc/1/fd/1

# run lock at 00:10 everyday
10 0 * * * /usr/local/bin/node /usr/src/app/lock.js > /proc/1/fd/1
