this is a script test to stress a api-rest or webserver with some insistent requests to help find errors on backend  

## npm install



## sample to run code
node server_monitoring.js  --ip 192.168.1.10 --url /teste --interval 1500

### if you are experiencing some troubles using this code and the attempts to retrieve url are causing this software to stop, this script was made to stress test the url so I recommend you to tryout with forever or forever-monitor, this software save the content returned in the url on a local file for further investigation/debug so take care with file disk space 

https://www.npmjs.com/package/forever-monitor
or
https://www.npmjs.com/package/forever

## sample with forever

run `npm install forever`
then forever server_monitoring.js  --ip 192.168.1.10 --url /teste --interval 1500

