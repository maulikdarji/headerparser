var http = require("http");

var server = http.createServer(function(req,res){
  var ua='user-agent';
  var ip='x-forwarded-for';
  var lang='accept-language';
  
  var op={
    'ipaddress':req.headers[ip],
    'language':req.headers[lang],
    'Operating System':req.headers[ua]
  }
  
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(op));
});
server.listen(process.env.PORT || 8080);