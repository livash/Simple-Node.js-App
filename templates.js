var startBody = '<html>' +
  '<head>' +
  '<meta http-equiv="Content-Type" content="text/html;' +
  'charset=UTF-8" />' +  
  '</head>' +
  '<body>' +
  '<form action="/upload" method="post">' +
  '<textarea name="text" rows="20" cols="60"></textarea>' +
  '<br>' +
  '<input type="submit" value="Submit text" />' +
  '</form>' +
  '</body>' +
  '</html>'

var uploadBody = "Hello UPLOAD";

exports.startBody = startBody;
exports.uploadBody = uploadBody;