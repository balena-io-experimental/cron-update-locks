# cron-updates-example

This example makes use of the [resin.io update locking feature](http://docs.resin.io/#/pages/runtime/supervisor-api.md#update-locking) to schedule updates only between midnight at 00:10. 

It uses [npm/lockfile](https://github.com/npm/lockfile) to manage the lockfile and cron to do the scheduling. 

