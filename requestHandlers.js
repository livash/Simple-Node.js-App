function start() {
  console.log("Request handler 'start' was called.");
  return "Hello START";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello UPLOAD";
}

exports.start = start;
exports.upload = upload;
