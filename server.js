var formidable = require('formidable',)
    http       = require('http'),
    sys        = require('sys'),
    url        = require('url');

function start(router, handle) {
  function onRequest(req, res) {
    var postData = "";
    var chunkNum = 0;
    var pathName = url.parse(req.url).pathname;
    console.log("Request received for " + pathName);

    req.setEncoding("utf8");
    
    req.addListener("data", function(postDataChunk) {
      chunkNum += 1;
      postData += postDataChunk;
      console.log("Received POST data chunk '" +
      postDataChunk + "'.");
    });

    req.addListener("end", function() {
      router(handle, pathName, res, postData);
      console.log("Number of posted data chunks is : " + chunkNum);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started...");
}

exports.start = start;
