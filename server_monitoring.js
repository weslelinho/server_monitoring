var http = require('http');
var log4js = require("log4js");

var count = 0;
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
  });
var logger = log4js.getLogger("cheese");
logger.level = "debug";

var options = {
    host: '192.168.15.2',
    path: '/measurements'
  };

  var options2 = {
    host: '192.168.15.2',
    path: '/logs_pt'
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
  
  function myFunc(arg) {
      try {
        http.request(options, callback).end();
        http.request(options2, callback).end();
        count++;
        logger.debug(`requests count ${count}'`);
        console.log(`arg was => ${arg}`);
      } catch (error) {
        logger.debug(error);
      }
   
  }
  
  setInterval(myFunc, 1500, 'ServerMonitoring');