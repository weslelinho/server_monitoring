var http = require('http');
var log4js = require("log4js");
const args = require('minimist')(process.argv.slice(2))

var count = 0;
log4js.configure({
    appenders: { cheese: { type: "file", filename: `${args['ip']}${args['url']}.log` } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
  });
var logger = log4js.getLogger("cheese");
logger.level = "debug";

var options = {
    host: args['ip'],
    path: args['url'],
  };
 
  callback = function(response) {
    var str = '';
  
    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
        try {
            str += `response.statusCode = ${response.statusCode}\n`;
            str += chunk;
            str += "\n";
        } catch (error) {
            logger.debug(error);
        }
        
    });
  
    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      console.log(`response.statusCode = ${response.statusCode} `);
      try {
        logger.debug(str);
      } catch (error) {
        logger.debug(error);
      }
    });
  }
  
  function getUrlContent(arg) {
      try {
        if (!args['url']) {
            console.log("parameter --url is required");
        
        }
        if (!args['ip']) {
          console.log("parameter --ip is required");
        
      }
      if (!args['interval']) {
        console.log("parameter --interval is required");
      
    }

      if (!args['ip'] || !args['url'] || !args['interval']) {
       return;
      }

        console.log(`trying to reach ${args['ip']+ args['url']}`);
        console.log(args['url']);
        http.request(options, callback).end();
        count++;
        logger.debug(`requests count ${count}'`);
      } catch (error) {
        logger.debug(error);
      }
   
  }
  
  setInterval(getUrlContent, args['interval'], 'ServerMonitoring');