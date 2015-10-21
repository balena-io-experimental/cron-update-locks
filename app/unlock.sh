# /proc/1/fd/1 is systemd's stdout, and therefore appears in the resin logs.
rm /data/resin-updates.lock > /proc/1/fd/1