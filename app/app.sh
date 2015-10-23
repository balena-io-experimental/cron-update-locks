# Lock updates when container starts
lockfile /data/resin-updates.lock
while sleep 10; do echo "My app is running without interruption"; done