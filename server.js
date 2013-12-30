var http = require('http');
var url  = require('url');

function start(router, handle) {
  function onRequest(req, res) {
    var pathName = url.parse(req.url).pathname;
    console.log("Request received for " + pathName);

   router(handle, pathName, res);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started...");
}

exports.start = start;
