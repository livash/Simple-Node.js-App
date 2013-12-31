var formidable = require('formidable'),
    http       = require('http'),
    sys        = require('sys'),
    url        = require('url');

function start(router, handle) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Requet for " + pathname + " received.");
    router(handle, pathname, res, req);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started...");
}

exports.start = start;
