var startBody = '<html>' +
  '<head>' +
  '<meta http-equiv="Content-Type" content="text/html;' +
  'charset=UTF-8" />' +  
  '</head>' +
  '<body>' +
  '<form action="/upload" enctype="multipart/form-data" method="post">' +
  '<input type="file" name="upload"></input>' +
  '<br>' +
  '<input type="submit" value="Upload file" />' +
  '</form>' +
  '</body>' +
  '</html>'

var uploadBody = "Hello UPLOAD";

exports.startBody = startBody;
exports.uploadBody = uploadBody;