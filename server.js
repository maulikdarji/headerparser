var http = require("http");

var server = http.createServer(function(req,res){
  var ua=req.headers['user-agent'];
  var ip=req.headers['x-forwarded-for'];
  var lang=req.headers['accept-language'].split(";")[0].split(",")[0];
  var browser='';
  var os="";
  
  //Operating System Match
  if(ua.match(/windows/i)){
    os='Windows';
  }
  else if(ua.match(/android/i)){
    os='Android';
  }
  else if(ua.match(/linux/i)){
    os='Linux';
  }
  else if(ua.match(/apple/i)){
    os="Apple";
  }
  else{
    os="Unknown";
  }
  
  //Browser Match
  if(ua.match(/chrome/i)){
    browser="Chrome";
  }
  else if(ua.match(/firefox/i)){
    browser="Firefox";
  }
  else if(ua.match(/explorer/i)){
    browser="Internet Explorer";
  }
  else{
    browser="Unknown";
  }
  
  
  var op={
    'ipaddress':ip,
    'language':lang,
    'Operating System':os,
    'Browser':browser
  }
  
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(op));
});
server.listen(process.env.PORT || 8080);