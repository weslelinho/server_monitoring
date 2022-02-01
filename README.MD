this is a script test to stress a api-rest or webserver/or to monitor a http server with requests to help find errors on backend  

First I used on a project of a embed linux that runs a webserver to expose some data of a equipment trought api-rest, I tested my system registering the requests through time then I had all the data from the requests I've made and the answers the server gave saved in a log file.

## npm install
## cmd sample to run code
node server_monitoring.js  --ip 192.168.1.10 --url /teste --interval 1500
 

## this software save the content returned in the url on a local file for further investigation/debug so take care with disk space 

if you are experiencing some troubles runing this code and the attempts to retrieve url are causing this software to stop, this script was made to stress test the url so I recommend you to tryout with forever or forever-monitor

https://www.npmjs.com/package/forever-monitor
or
https://www.npmjs.com/package/forever

## sample with forever

run `npm install forever`
then `forever server_monitoring.js  --ip 192.168.1.10 --url /teste --interval 1500`

