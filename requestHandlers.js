var querystring = require('querystring'),
    template    = require('./templates');

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(template.startBody);
  response.end();

}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent: " + 
  querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
