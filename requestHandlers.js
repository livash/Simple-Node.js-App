var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");

  function sleep(milliseconds) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + milliseconds);
  }

  exec("ls -lah",
    { timeout: 100000, maxBuffer: 2000*1024 },
    function(error, stdout, srderr) {
      //sleep(10000);
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(stdout);
      response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello UPLOAD");
  response.end();
}

exports.start = start;
exports.upload = upload;
