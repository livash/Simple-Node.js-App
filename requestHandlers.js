var querystring = require('querystring'),
    formidable  = require('formidable'),
    fs          = require('fs'),
    template    = require('./templates');

function start(response, request) {
  console.log("Request handler 'start' was called.");

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(template.startBody);
  response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse....");
  form.parse(request, function(error, fields, files) {

    // in case such file already exists
    // WIndows would not allow override
    // so we rename existing file
    fs.rename(files.upload.path, '/tmp/test.png', function(error) {
      if (error) {
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, '/tmp/test.png')
      }
    });
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Received image: <br/> ");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response, request) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "image/png"});
  fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start  = start;
exports.upload = upload;
exports.show   = show;
